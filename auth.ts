import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";

import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserById } from "./modules/auth/actions";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) return false;
      return true;
    },

    async jwt({ token, user }) {
      // On initial sign-in, user contains the database user returned from the adapter
      if (user) {
        token.sub = user.id;
        token.role = (user as { role?: UserRole }).role || "USER";
      }

      if (token.sub) {
        const existingUser = await getUserById(token.sub);

        if (existingUser) {
          token.name = existingUser.name;
          token.email = existingUser.email;
          token.role = existingUser.role;
          token.picture = existingUser.image;
        }
      }

      return token;
    },

    async session({ session, token }) {
      // Attach the user ID and properties from token to session
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (token.name && session.user) {
        session.user.name = token.name;
      }

      if (token.email && session.user) {
        session.user.email = token.email;
      }

      if (token.picture && session.user) {
        session.user.image = token.picture as string;
      }

      return session;
    },
  },

  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
});
