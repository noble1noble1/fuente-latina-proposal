import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple friction gate. Not real security.
// Password is checked in /api/auth; middleware just verifies the cookie exists.
const COOKIE_NAME = "fl_gate";
const COOKIE_VALUE = "ok-fl1948";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the gate itself, the auth API, and Next internals.
  if (
    pathname.startsWith("/gate") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_NAME);
  if (cookie?.value === COOKIE_VALUE) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/gate";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
