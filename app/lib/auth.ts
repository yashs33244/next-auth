import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH_CONFIG ={
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email: { label: "Email", type:"email", placeholder:""},
                password: { label: "Password", type:"password", placeholder:""} 
            },
            async authorize(credentials: any){
                return {
                    id:"user 1"
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET, 
    callbacks:{
        jwt: async ({user, token}:any)=>{
            if(user){
                token.uid = user.id;
            }
            return token;
        },
        session: async ({session, token ,user}:any)=>{
            if(session.user){
                session.user.id = token.uid;    
            }
            return session; 
        }
    },
    
}