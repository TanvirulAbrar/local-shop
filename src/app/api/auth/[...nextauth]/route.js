import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const authOptions = {
  pages: {
    signIn: "/auth/login",
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        //  MongoDB later
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "123Qwe$"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
            role: "admin",
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
