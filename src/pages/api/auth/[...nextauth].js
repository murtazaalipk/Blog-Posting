import NextAuth from "next-auth";
import User from "@/model/user";
import { dbConnect } from "@/lib/db";
import  bcrypt  from "bcryptjs";
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
};

export default NextAuth(authOptions);
