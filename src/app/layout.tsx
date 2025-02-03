import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header, { Header2 } from "@/components/header";
import { Footer } from "@/components/footer";
import { ClerkProvider, SignIn } from "@clerk/nextjs";






const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <ClerkProvider publishableKey="pk_test_b3Blbi1jb3ctMjYuY2xlcmsuYWNjb3VudHMuZGV2JA">
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SignIn/>
        <Header/>
        <Header2/>
        {children}
        <Footer/>

      </body>
      
    </html>
    </ClerkProvider>
  );
}
