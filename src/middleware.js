import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.cookies.get("auth")?.value;
  const pathname = req.nextUrl.pathname;

  
  console.log("Middleware hit:", pathname);
  console.log("Auth cookie:", auth);

  if (
    (pathname.startsWith("/dashboard") ||
      pathname.startsWith("/seller/add-product")) &&
    !auth
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/seller/add-product/:path*"],
};
