import ScrollReveal from "@/components/ScrollReveal";

const POSTS = [
  { num: 1, week: "Week 1", title: "Launch Post", lang: "EN", copy: `After 20 years fixing CNC machines, I finally made a website.\n\nI'm Alexandre Vachon, certified electro-mechanic based in Greater Montreal. I've spent two decades diagnosing and repairing CNC machines across aerospace, automotive, and defense.\n\nMakino, Mazak, Fanuc, Haas, Siemens — if your machine is down, I've probably already seen your exact problem.\n\nIndependent. No brand bias. Same-day response.\n\nIf you work in manufacturing and your machines matter, let's connect.\n\n(514) 971-1284\n\n#CNCRepair #Montreal` },
  { num: 2, week: "Week 1", title: "Knowledge Drop — Fanuc Alarm 414", lang: "EN", copy: `Fanuc alarm 414?\n\nBefore you call anyone: check the encoder battery.\n\n90% of the time, it's a dead battery. 5-minute fix. $15 part.\n\nI see shops pay $500+ for an emergency call when the tech shows up and swaps a battery.\n\nSave this post. Check the battery first.\n\n#CNC #Fanuc` },
  { num: 3, week: "Week 1", title: "Machine Brand — Mazak", lang: "EN", copy: `Mazak machines are built like tanks.\n\nBut the Mazatrol controller has a few quirks that catch people off guard:\n\n→ Tool offset corruption after a power surge — always check your G10 data\n→ Coolant pressure faults that mimic spindle alarms\n→ Battery backup failures that wipe your programs without warning\n\nI've been servicing Mazaks for 15+ years. These are the calls I get every month.\n\nIf your Mazak is acting up, I probably already know what's wrong.\n\n(514) 971-1284` },
  { num: 4, week: "Week 2", title: "Job Story — Makino Crash", lang: "EN", copy: `Got a call last week: "Our Makino is 200 microns out on the X axis after a crash."\n\nAerospace tolerances. 200 microns might as well be 200 miles.\n\nShowed up same day. Full geometry check. Ballbar test. Found the issue — ballscrew compensation table was corrupted from the crash impact.\n\nRewrote the comp values. Re-ran the test. Back in tolerance by end of shift.\n\nThat's what 20 years of seeing the same problems gets you. You stop guessing.` },
  { num: 5, week: "Week 2", title: "Preventive Maintenance Tips", lang: "EN", copy: `Your CNC machine needs preventive maintenance twice a year. Minimum.\n\nHere's what most shops skip (and pay for later):\n\n1. Checking ballscrew backlash — 5 minutes, prevents $10K+ in scrap\n2. Cleaning way covers — $50 in labor now vs. $5K in way replacement later\n3. Testing servo drives under load — finds intermittent faults before they become crashes\n4. Verifying geometry — drift happens slowly, tolerance loss sneaks up\n\nThe cheapest repair is the one you prevent.\n\nNeed a PM schedule? Call me. I'll tell you exactly what your machine needs.` },
  { num: 6, week: "Week 2", title: "Availability Post", lang: "EN", copy: `Booking next week for preventive maintenance inspections in the Greater Montreal area.\n\nFull geometry check + electrical + mechanical + written report.\n\nAll brands. All controls. 20 years of experience, one straightforward price.\n\n(514) 971-1284` },
  { num: 7, week: "Week 3", title: "9 Brands, One Approach", lang: "EN", copy: `9 brands. One approach.\n\nMakino. Mazak. Cincinnati. Matsuura. Haas. TOS. Emmegi. Fanuc. Siemens.\n\nThe machine doesn't care what brand it is. Neither do I.\n\nWhen you're independent, you learn them all. No brand loyalty. No dealer agenda. Just: what's wrong, and what's the fastest way to fix it.\n\nThat's what 20 years on the shop floor gives you. Pattern recognition across every platform.` },
  { num: 8, week: "Week 3", title: "Job Story — Haas Servo", lang: "FR", copy: `Appel vendredi soir: "Notre Haas jette des alarmes de servo sur l'axe Z. Production arrêtée."\n\nArrivé sur place en moins de 2 heures. Diagnostic: connecteur du moteur servo intermittent — vibration de la machine l'a usé avec le temps.\n\nRemplacement, recalibration, test de charge. Machine repartie avant la fin du quart.\n\nDes fois c'est un problème de $50,000. Des fois c'est un connecteur. La différence c'est le diagnostic.\n\n(514) 971-1284` },
  { num: 9, week: "Week 3", title: "Pre-Purchase Inspection", lang: "EN", copy: `Before you buy a used CNC machine:\n\nGet an independent inspection. Not from the dealer. Not from the seller. From someone who has nothing to sell you.\n\nHere's what I check on a pre-purchase inspection:\n\n→ Full geometry (every axis)\n→ Ballbar circularity test\n→ Spindle runout and vibration\n→ Servo drive health\n→ Hydraulic/pneumatic pressure and leak check\n→ Control condition + backup verification\n→ Electrical safety compliance\n\nI've saved clients from buying machines with $30K in hidden repairs.\n\nThe inspection costs a fraction of one bad purchase.` },
  { num: 10, week: "Week 4", title: "Machine Brand — Fanuc", lang: "EN", copy: `If you run Fanuc controls, bookmark this.\n\nTop 5 alarm codes I see every month and what they actually mean:\n\n1. SV0401 — V ready off (check power supply, not the motor)\n2. SV0418 — Excess error (could be mechanical binding, not a servo issue)\n3. OH0700 — Overheat (clean the fan. Seriously, just clean it.)\n4. SP9045 — Spindle alarm (check the encoder before replacing the drive)\n5. PC000 — Parameter reset (battery died — your programs might be gone)\n\nMost of these have a $50 fix. Don't let anyone quote you $5,000.\n\n#Fanuc #CNC` },
  { num: 11, week: "Week 4", title: "Cost of Downtime", lang: "FR", copy: `Combien coûte une heure d'arrêt machine?\n\nEn aérospatiale: $500-2,000/heure.\nEn automobile: $1,000-5,000/heure.\nEn défense: inestimable (délais de livraison = pénalités).\n\nC'est pour ça que le "on va attendre le technicien du fabricant" n'est pas une stratégie.\n\nIndépendant. Pas d'agenda. Réponse le même jour dans le Grand Montréal.\n\nAVI Industriel — (514) 971-1284` },
  { num: 12, week: "Week 4", title: "Month Recap", lang: "EN", copy: `First month on LinkedIn. Here's what I've learned:\n\nThe manufacturing community here is smaller and more connected than I thought. Had great conversations with plant managers, maintenance leads, and fellow technicians across Quebec.\n\nA few things I'll keep sharing:\n→ Real job stories (what went wrong, how we fixed it)\n→ Quick tips that save you money\n→ Honest takes on machine brands\n\nIf you're in manufacturing and your machines matter — let's connect.\n\nAnd if a machine is down right now: (514) 971-1284. Same-day response, Greater Montreal.` },
];

const KPIS = [
  { metric: "Connections", d30: "150", d60: "350", d90: "500+" },
  { metric: "Post impressions (avg)", d30: "200–500", d60: "500–1,500", d90: "1,000–3,000" },
  { metric: "Engagement rate", d30: "3–5%", d60: "4–6%", d90: "5–8%" },
  { metric: "Profile views/week", d30: "30–50", d60: "50–100", d90: "100+" },
  { metric: "Inbound messages", d30: "2–3", d60: "5–8", d90: "8–15" },
  { metric: "Leads (calls/quotes)", d30: "1–2", d60: "3–5", d90: "5–10" },
];

export default function LinkedInStrategy() {
  return (
    <main>
      {/* Header */}
      <section className="bg-graphite grid-texture pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <img src="/avi-logo.svg" alt="AVI" className="mx-auto h-16 md:h-20 w-auto mb-8" style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }} />
          <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">LinkedIn Launch Strategy</h1>
          <p className="mt-4 text-steel-light text-lg">AVI Industriel Inc. &mdash; First 30 Days</p>
        </div>
      </section>

      {/* 1. Profile Setup */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">01</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">Profile Setup</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">Headline</p>
                <p className="font-semibold text-machine-black">CNC Diagnostics &amp; Repair | 20 Years | Makino &middot; Mazak &middot; Fanuc &middot; Haas &middot; Siemens | Greater Montreal</p>
              </div>

              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-3">About Section</p>
                <div className="text-sm text-shop-grey leading-relaxed whitespace-pre-line">{`I fix CNC machines. That's it. That's the job.

20 years as a certified electro-mechanic. 9 major CNC brands. Aerospace, automotive, defense, plastics — if it has a spindle and a control, I've worked on it.

I started investigating defects on aerospace parts and identifying root causes. That diagnostic mindset never left. When your machine throws an alarm at 6am and the OEM can't come for three weeks, I'm the call you make.

What I do:
→ CNC geometry & alignment
→ Electrical troubleshooting (intermittent faults, drive failures, servo issues)
→ Mechanical, pneumatic, hydraulic systems
→ Preventive maintenance programs
→ Pre-purchase machine inspections
→ Safety audits & CSA modifications

Brands: Makino, Mazak, Cincinnati, Matsuura, Haas, TOS, Emmegi, Fanuc, Siemens.

Independent. No brand bias. No parts to sell. Just honest diagnosis and fast repair.

Based in Greater Montreal. Ready to travel.

Machine down? Call me: (514) 971-1284`}</div>
              </div>

              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">Company Page Description</p>
                <p className="text-sm text-shop-grey leading-relaxed">AVI Industriel Inc. — Independent CNC diagnostics and repair. 20 years of hands-on experience across 9 major CNC platforms. Serving aerospace, automotive, defense, and manufacturing in Greater Montreal. Your machine is down. We get it running. (514) 971-1284</p>
              </div>

              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">Banner Image</p>
                <p className="text-sm text-shop-grey">Dark graphite background with AVI logo (green outline) centered. Text: &ldquo;Diagnostic. Repair. Running.&rdquo; in Inter bold. Matches the website aesthetic.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Content Calendar */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">02</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-4">Content Calendar</h2>
            <p className="text-shop-grey text-sm mb-8">3 posts per week &mdash; Tuesday, Thursday, Saturday</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Week</th>
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Tuesday</th>
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Thursday</th>
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Saturday</th>
                  </tr>
                </thead>
                <tbody className="text-shop-grey">
                  <tr className="border-b border-border-light"><td className="py-3 px-4 font-mono text-signal">1</td><td className="py-3 px-4">Launch post</td><td className="py-3 px-4">Knowledge drop #1</td><td className="py-3 px-4">Machine brand: Mazak</td></tr>
                  <tr className="border-b border-border-light"><td className="py-3 px-4 font-mono text-signal">2</td><td className="py-3 px-4">Job story #1</td><td className="py-3 px-4">Knowledge drop #2</td><td className="py-3 px-4">Availability</td></tr>
                  <tr className="border-b border-border-light"><td className="py-3 px-4 font-mono text-signal">3</td><td className="py-3 px-4">Credibility post</td><td className="py-3 px-4">Job story #2 (FR)</td><td className="py-3 px-4">Knowledge drop #3</td></tr>
                  <tr><td className="py-3 px-4 font-mono text-signal">4</td><td className="py-3 px-4">Machine brand: Fanuc</td><td className="py-3 px-4">Knowledge drop (FR)</td><td className="py-3 px-4">Month recap</td></tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Ready-to-Post */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">03</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">12 Ready-to-Post Pieces</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {POSTS.map((post, i) => (
              <ScrollReveal key={post.num} delay={i * 40}>
                <div className="bg-white border border-border-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-signal text-xs font-bold">#{String(post.num).padStart(2, "0")}</span>
                    <span className="text-xs text-dust">{post.week}</span>
                    <span className={`text-[10px] uppercase tracking-[0.1em] font-semibold px-2 py-0.5 rounded ${post.lang === "FR" ? "bg-blue-50 text-blue-500" : "bg-concrete text-dust"}`}>{post.lang}</span>
                  </div>
                  <h3 className="font-semibold text-machine-black text-sm mb-3">{post.title}</h3>
                  <p className="text-sm text-shop-grey leading-relaxed whitespace-pre-line">{post.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Templates */}
      <section className="bg-graphite grid-texture py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-2">04</p>
            <h2 className="text-3xl font-bold tracking-tight text-bright mb-8">Content Templates</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { title: "Job Completion", template: "[Problem statement — one sentence, specific]\n\n[How you found it — diagnostic approach, 2-3 sentences]\n\n[The fix — what you did, how fast]\n\n[Takeaway — the pattern or lesson]\n\n(514) 971-1284" },
              { title: "Knowledge Drop", template: "[Hook — surprising fact or common mistake]\n\n[The list — 3-5 specific, actionable items]\n\n[Kicker — why this matters / what it saves]\n\n[Soft CTA — \"Questions? (514) 971-1284\"]" },
              { title: "Machine Brand", template: "[Brand name + strong opinion or fact]\n\n[3-5 specific observations from experience]\n\n[Closer — \"I've been servicing [brand] for X years. If yours is acting up, I probably know what's wrong.\"]\n\n(514) 971-1284" },
              { title: "Availability", template: "[Booking window — next week, this month]\n\n[What you're offering — specific service]\n\n[Scope — brands, what's included]\n\n[One line — price framing or \"straightforward pricing\"]\n\n(514) 971-1284" },
            ].map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 60}>
                <div className="bg-steel border border-border-dark rounded-lg p-6">
                  <h3 className="font-semibold text-bright text-sm mb-3">{t.title}</h3>
                  <pre className="text-xs text-steel-light leading-relaxed whitespace-pre-line font-mono">{t.template}</pre>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Engagement */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">05</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">Engagement Strategy</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Who to Connect With</h3>
            <div className="space-y-3 mb-10">
              {[
                { priority: "1", titles: "Plant Manager, Maintenance Manager, Maintenance Supervisor", why: "They approve service contracts" },
                { priority: "2", titles: "CNC Operator, Machine Technician", why: "They recommend providers to managers" },
                { priority: "3", titles: "Purchasing Manager, Procurement Specialist", why: "They vet and negotiate" },
                { priority: "4", titles: "Independent technicians, tool & die makers", why: "Referral network" },
              ].map((row) => (
                <div key={row.priority} className="bg-white border border-border-light rounded-lg p-4 flex gap-4">
                  <span className="font-mono text-signal text-lg font-bold flex-shrink-0 w-6">{row.priority}</span>
                  <div>
                    <p className="text-sm font-semibold text-machine-black">{row.titles}</p>
                    <p className="text-xs text-dust mt-1">{row.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Groups to Join</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {["CNC Machining & Programming", "Montreal Manufacturing Network", "Canadian Manufacturing", "Aerospace Manufacturing Professionals", "Maintenance and Reliability Professionals"].map((g) => (
                <span key={g} className="text-xs px-3 py-1.5 rounded-full border border-border-light text-shop-grey bg-white">{g}</span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h3 className="font-semibold text-machine-black mb-4">Connection Request</h3>
            <div className="bg-white border border-border-light rounded-lg p-4">
              <p className="text-sm text-shop-grey italic">&ldquo;Hi [name] — I&rsquo;m an independent CNC technician in Montreal (20 years, Makino/Mazak/Fanuc/Haas/Siemens). Connecting with manufacturing professionals in the area. Happy to connect.&rdquo;</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. KPIs */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">06</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">KPIs — First 90 Days</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Metric</th>
                    <th className="text-center py-3 px-4 font-semibold text-machine-black">30 days</th>
                    <th className="text-center py-3 px-4 font-semibold text-machine-black">60 days</th>
                    <th className="text-center py-3 px-4 font-semibold text-machine-black">90 days</th>
                  </tr>
                </thead>
                <tbody>
                  {KPIS.map((row) => (
                    <tr key={row.metric} className="border-b border-border-light">
                      <td className="py-3 px-4 text-shop-grey">{row.metric}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm text-machine-black">{row.d30}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm text-machine-black">{row.d60}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm text-signal font-semibold">{row.d90}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white border border-border-light rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-machine-black mb-2">What success looks like</h3>
              <p className="text-sm text-shop-grey leading-relaxed">Alexandre is recognized in the Montreal manufacturing LinkedIn community as the independent CNC guy. When someone&rsquo;s machine goes down, they&rsquo;ve either seen his posts or someone in their network tags him. One $5,000+ emergency repair job from a LinkedIn connection pays for 6 months of posting effort.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-graphite py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-steel-light/40 text-xs">Prepared by EMBI Studio &mdash; <a href="https://embi-studio.com" className="text-signal/50 hover:text-signal transition-colors">embi-studio.com</a></p>
        </div>
      </section>
    </main>
  );
}
