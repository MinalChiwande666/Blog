import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github'
export const {handlers, auth, signIn, signOut} = NextAuth({
    providers:[GitHubProvider,({clientId: 'Ov23li5xoiHOeUSk6K5b', 
        clientSecret: "0af7f15cd766fe698c052afcb998b79746655081",
    }),
],

})