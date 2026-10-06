/**
 * Email notifications for the blog/GBP review workflow.
 * All notifications go to Mich (and only Mich) via Resend.
 */

type NotificationType = "comment" | "approve" | "send-back" | "resubmit";

export interface ReviewNotification {
  type: NotificationType;
  docType: "post" | "gbpPost";
  title: string;
  slug: string;
  author: string;
  detail: string;
  paragraphId?: string;
}

const TO_EMAIL = "michelle@embi-studio.com";
const FROM_EMAIL = "AVI Portal <portal@embi-studio.com>";

const SUBJECTS: Record<NotificationType, (n: ReviewNotification) => string> = {
  comment: (n) => `[AVI] ${n.author} commented on "${n.title}"`,
  approve: (n) => `[AVI] ✅ Alex approved "${n.title}"`,
  "send-back": (n) => `[AVI] ✏️ Alex sent "${n.title}" back for revision`,
  resubmit: (n) => `[AVI] 🔁 Resubmitted "${n.title}" for Alex review`,
};

const HEADLINES: Record<NotificationType, string> = {
  comment: "New comment from Alex",
  approve: "Article approved by Alex",
  "send-back": "Sent back for revision",
  resubmit: "Resubmitted for review",
};

const COLORS: Record<NotificationType, string> = {
  comment: "#2563EB",
  approve: "#2ECC52",
  "send-back": "#F59E0B",
  resubmit: "#8B5CF6",
};

export async function sendReviewNotification(n: ReviewNotification): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.log("[ReviewNotification] No RESEND_API_KEY, skipping email:", n);
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(resendKey);

  const dashboardPath = n.docType === "post" ? "/dashboard/blog" : "/dashboard/gbp";
  const linkSuffix = n.docType === "post" ? n.slug : "";
  const dashboardUrl = `https://avi-industriel.com${dashboardPath}${linkSuffix ? "/" + linkSuffix : ""}`;

  const html = `
    <div style="font-family: -apple-system, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #1A1D23; padding: 28px 32px; border-radius: 12px 12px 0 0;">
        <div style="display: inline-block; background: ${COLORS[n.type]}; color: white; padding: 4px 12px; border-radius: 999px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin-bottom: 12px;">
          ${HEADLINES[n.type]}
        </div>
        <h1 style="color: #F7F7F5; font-size: 22px; margin: 0 0 6px; font-weight: 700;">
          ${escapeHtml(n.title)}
        </h1>
        <p style="color: #9A9DA6; font-size: 13px; margin: 0;">
          ${n.docType === "post" ? "Blog post" : "GBP post"} · by ${escapeHtml(n.author)}
        </p>
      </div>

      <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e5e5e5;">
        ${
          n.paragraphId
            ? `<p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; margin: 0 0 8px;">Paragraph ${escapeHtml(n.paragraphId)}</p>`
            : ""
        }
        <div style="background: white; border-left: 4px solid ${COLORS[n.type]}; padding: 16px 20px; border-radius: 4px; font-size: 15px; line-height: 1.5; color: #1a1a1a; margin-bottom: 24px;">
          ${escapeHtml(n.detail).replace(/\n/g, "<br/>")}
        </div>

        <a href="${dashboardUrl}"
           style="display: inline-block; background: #2ECC52; color: #0F1419; padding: 12px 22px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
          Open in dashboard →
        </a>
      </div>

      <div style="background: #1A1D23; padding: 16px 32px; border-radius: 0 0 12px 12px; text-align: center;">
        <p style="color: #5A5D66; font-size: 11px; margin: 0;">
          AVI Industriel · Review Portal
        </p>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: SUBJECTS[n.type](n),
    html,
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
