// middleware.js (or middleware.ts if using TypeScript)

import { clerkMiddleware } from '@clerk/nextjs/server';


export default clerkMiddleware({
  // Add any custom Clerk middleware options here if needed.
  // For example, to customize the signIn URL:
  // signInUrl: '/sign-in',  
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones listed in the array below.
     * This is an alternative, more readable approach than a complex regex.
     * It leverages Next.js's built-in matcher syntax.
     */
    {
      source: '/((?!api|_next|.*\\.(?:html|css|js|json|ico|svg|woff|woff2|ttf|eot|webmanifest|png|jpe?g|gif|bmp|tiff?|webp|pdf|txt))).*',
      missing: [
        { type: 'header', key: 'next-router-prefetch' }, // Handle Next.js prefetching
      ],
    },
    // Optionally, you can still use regex for more specific matching:
    '/api/(.*)', // Match all API routes
    '/trpc/(.*)', // Match all tRPC routes (if you're using tRPC)
  ],
};