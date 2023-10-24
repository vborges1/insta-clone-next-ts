import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
  pages: {
    signin: "auth/signin"
  }
}

export default NextAuth(authOptions)