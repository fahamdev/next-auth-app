import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        console.log(req);
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        };
        const response = await axios.post(
          "http://localhost:3002/login",
          payload
        );
        response;
        if (response && response.data) {
          return response.data;
        } else {
          return null;
        }
      },
    }),
  ],
});
