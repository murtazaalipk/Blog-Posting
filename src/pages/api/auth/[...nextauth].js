import NextAuth from "next-auth";
import User from "@/model/user";
import { dbConnect } from "@/lib/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize({ email, password }) {
        try {
          await dbConnect();
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("No user found with the provided email");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error("Incorrect password");
          }

          return user;
        } catch (error) {
          console.error("Error in authorization: ", error);
          throw new Error(error.message || "Internal server error");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.firstName = user.firstName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      return session;
    },
  },
};

export default NextAuth(authOptions);
