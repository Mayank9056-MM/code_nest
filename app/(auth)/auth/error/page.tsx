"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrandMark } from "@/modules/home/components/BrandLogo";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  const getErrorMessage = () => {
    switch (error) {
      case "Configuration":
        return {
          title: "Connection Unavailable",
          description:
            "We were unable to connect to the authentication service. Please try again in a few moments.",
        };
      case "AccessDenied":
        return {
          title: "Access Denied",
          description:
            "You do not have permission to sign in with this account. Please try a different account.",
        };
      case "Verification":
        return {
          title: "Verification Expired",
          description:
            "The sign-in link is no longer valid or has expired. Please request a new link.",
        };
      case "OAuthSignin":
      case "OAuthCallback":
      case "CallbackRouteError":
        return {
          title: "Sign In Cancelled",
          description:
            "The sign in process was interrupted or encountered an error. Please try signing in again.",
        };
      case "OAuthAccountNotLinked":
        return {
          title: "Account Already Exists",
          description:
            "An account with this email was registered using a different provider. Account linking has been enabled, please try signing in again.",
        };
      default:
        return {
          title: "Authentication Problem",
          description:
            "We encountered an issue while processing your request. Please try again.",
        };
    }
  };

  const { title, description } = getErrorMessage();

  return (
    <Card className="w-full border-[#2B332E] bg-[#141715] text-[#F2F5F2] shadow-2xl rounded-xl overflow-hidden">
      <CardHeader className="space-y-3 text-center pb-6">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <BrandMark size="lg" />
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="p-1 rounded-full bg-red-500/10 text-red-400">
            <AlertCircle className="h-4 w-4" />
          </div>
          <CardTitle className="text-lg font-bold tracking-tight text-[#F2F5F2]">
            {title}
          </CardTitle>
        </div>

        <CardDescription className="text-xs font-mono text-[#9BA59E] max-w-sm mx-auto leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col sm:flex-row gap-2.5 px-6 pt-2 pb-6">
        <Link
          href="/auth/sign-in"
          className="w-full h-10 font-mono text-xs font-semibold gap-2 rounded-md bg-[#C5F36B] text-[#0D0F0E] hover:bg-[#D6FF83] transition-colors inline-flex items-center justify-center shadow-xs"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Try Again</span>
        </Link>
        <Link
          href="/"
          className="w-full h-10 font-mono text-xs font-medium gap-2 rounded-md bg-[#0D0F0E] border border-[#2B332E] text-[#F2F5F2] hover:bg-[#1B201D] hover:border-[#9BA59E]/50 transition-colors inline-flex items-center justify-center"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <Card className="w-full border-border bg-card p-8">
          <div className="flex justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        </Card>
      }
    >
      <AuthErrorContent />
    </Suspense>
  );
}
