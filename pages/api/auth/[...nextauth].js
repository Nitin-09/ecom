import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/User";
import connectDb from "@/midleware/mongoose"
import NextAuth from "next-auth";
const bcrypt = require('bcryptjs');

const authOptions = {
    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
        async authorize(credentials) {
            try {
                const { username, password } = credentials;
                const userTemp = await User.findOne({ email:username });
                if (!userTemp) {
                    return null;
                }
                const passwordCompare = await bcrypt.compare(password, userTemp.password);
                if (!passwordCompare) {
                    return null;
                }
                console.log("hello5")
                if (userTemp) {
                    // console.log(userTemp)
                    return userTemp;
                }
                return nulll;

            } catch (error) {
                const errorMessage = error?.response?.data || null;
                throw new Error(errorMessage ? JSON.stringify(errorMessage) : error);
            }
        }
    })],
    pages:{
        signIn:'/login',
        signOut:'/login'
    },
    callbacks: {
        signIn:({ user }) =>{
            if (user) {
              return true;
            }
            return false;
          },
        jwt: ({ token, user }) => {
            console.log(token, user)
            if (user) {
                token.id = user._id;
                token.user = user;
            }
            return token;
        },
        session: ({ session, token }) => {
            console.log(token, session)
            if (token) {
                session.id = token._id;
                session.user = token.user;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        encryption: true,
    },


}
export default connectDb(NextAuth(authOptions));

