import type { SessionOptions } from "iron-session";

export interface SessionData {
  isLoggedIn: boolean;
}

export const sessionOptions: SessionOptions = {
  password:
    process.env.SESSION_SECRET ||
    "avi-industriel-fallback-secret-32-chars-minimum-for-iron-session",
  cookieName: "avi-dashboard-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
};

export const defaultSession: SessionData = {
  isLoggedIn: false,
};
