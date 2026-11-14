import { ThemeProvider } from "@/components/providers/theme-providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeNest — Build. Run. Create. Anywhere.",
    template: "%s | CodeNest",
  },
  description:
    "Build, run and experiment with web applications directly in your browser. No complicated setup required.",
  openGraph: {
    title: "CodeNest — Build. Run. Create. Anywhere.",
    description:
      "Build, run and experiment with web applications directly in your browser. No complicated setup required.",
    siteName: "CodeNest",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Toaster />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
