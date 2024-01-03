import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import connectDb from "@/midleware/mongoose"
import NextAuth from "next-auth";
const bcrypt = require('bcryptjs');

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const { username, password } = credentials;
                    const userTemp = await User.findOne({ email: username });
                    if (!userTemp) {
                        return null;
                    }
                    const passwordCompare = await bcrypt.compare(password, userTemp.password);
                    if (!passwordCompare) {
                        return null;
                    }
                    if (userTemp.email === 'admin@whizz.in') 
                        return { ...userTemp, nextPage: '/dashboard/addProduct' };
                    if (userTemp) {
                        return userTemp;
                    }
                    return null;

                } catch (error) {
                    const errorMessage = error?.response?.data || null;
                    throw new Error(errorMessage ? JSON.stringify(errorMessage) : error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })],
    pages: {
        signIn: '/login',
        signOut: '/login'
    },
    callbacks: {
        signIn: ({ user }) => {
            if (user) {
                if(user.nextPage)
                    return user.nextPage;
                return '/login';
            }
            return false
        },
        jwt: ({ token, user }) => {
            if (user) {
                token.id = user._id;
                token.user = user;
            }
            return token;
        },
        session: ({ session, token }) => {
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

