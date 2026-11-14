import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  protectedRoutes,
  authRoutes,
} from "@/routes";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth?.user;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isApiRoute = nextUrl.pathname.startsWith("/api");
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    nextUrl.pathname.startsWith("/api/auth");
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  // Allow NextAuth authentication API routes
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  // If already logged in, redirect away from sign-in and auth error pages
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  // If not logged in and accessing protected API routes, return 401 JSON
  if (!isLoggedIn && isApiRoute) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // If not logged in and accessing protected pages, redirect to sign-in
  if (!isLoggedIn && (isProtectedRoute || !isPublicRoute)) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(`/auth/sign-in?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
