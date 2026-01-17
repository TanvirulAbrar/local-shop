import { NextResponse } from "next/server";

export function middleware(req) {
  const token =
    req.cookies.get("next-auth.session-token") ||
    req.cookies.get("__Secure-next-auth.session-token");

  const pathname = req.nextUrl.pathname;

  // Check if user is authenticated
  const isAuth = Boolean(token);

  // Protect these routes
  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/seller/add-product")
  ) {
    if (!isAuth) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/seller/add-product/:path*"],
};
