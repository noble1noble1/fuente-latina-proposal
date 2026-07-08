import { NextResponse } from "next/server";

const PASSWORD = "fl1948";
const COOKIE_NAME = "fl_gate";
const COOKIE_VALUE = "ok-fl1948";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const from = String(form.get("from") ?? "/");

  if (password.trim().toLowerCase() !== PASSWORD) {
    const url = new URL("/gate", req.url);
    url.searchParams.set("error", "1");
    if (from) url.searchParams.set("from", from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const dest = from && from.startsWith("/") ? from : "/";
  const res = NextResponse.redirect(new URL(dest, req.url), { status: 303 });
  res.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: false,
    sameSite: "lax",
    path: "/",
    // 30 days
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
