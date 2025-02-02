'use client';
import Link from 'next/link';
import {SignIn}  from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';
 
export default function Page() {
  const page = "https://open-cow-26.accounts.dev/user";


  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <section className="flex flex-col items-center justify-center w-full h-screen">
        <SignIn afterSignInUrl={page} />
        <Link href="/studio">
          <button className='bg-[#2A254B] py-4 px-6 rounded-[5px] text-[#F9F9F9]'>
            Click Here if you are Admin
          </button>
        </Link> 
      </section>
    </ClerkProvider>
  );
}



