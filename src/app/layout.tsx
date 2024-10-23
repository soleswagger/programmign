import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import {  ClerkProvider,  SignInButton,  SignedIn,  SignedOut,  UserButton} from '@clerk/nextjs'
export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (<ClerkProvider>
    <html lang="en">
      <body>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {children}
      </body>
    </html>
  </ClerkProvider>

  );
}


/*<html lang="en">
      <body className={`${GeistSans.variable}`}>
        <div className="text-3xl text-purple-400	">Super swag swagsite</div>
        <button className="btn">Press for tacobell</button>
        <div className="card bg-base-100 w-96 shadow-xl bg-blue-700	sepia">
  <div className="card-body">
    <h2 className="card-title">Burgers! Burgers! Burgers</h2>
    <p>Murphy</p>
  </div>
  <figure>
    <img
      src="https://th.bing.com/th/id/OIP.brbkjV_mD6X_jyNQkt7TtwHaEK?rs=1&pid=ImgDetMain"
      alt="The Murph" />
      
          
  </figure>
</div>
      {children}
      </body>
    </html>*/