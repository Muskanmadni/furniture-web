import Link from 'next/link';

import {ClerkProvider, SignIn } from '@clerk/nextjs';

export default function Page() {
  const page ="https://open-cow-26.accounts.dev/user"
  
          


  return (
    <section className="flex  flex-col items-center justify-center w-full h-screen">
    <ClerkProvider>
      <SignIn afterSignInUrl={page} />
    </ClerkProvider>
    <Link href={"studio"}>
    <button className='bg-[#2A254B] py-4 px-6 rounded-[5px] text-[#F9F9F9]'>Click Here if you're Admin</button></Link>
    </section>
      
 
  );
}  