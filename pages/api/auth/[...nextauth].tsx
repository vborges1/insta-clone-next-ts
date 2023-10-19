import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
}

export default NextAuth(authOptions)