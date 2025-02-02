"use strict";
// middleware.js (or middleware.ts if using TypeScript)
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var server_1 = require("@clerk/nextjs/server");
exports.default = (0, server_1.clerkMiddleware)({
// Add any custom Clerk middleware options here if needed.
// For example, to customize the signIn URL:
// signInUrl: '/sign-in',  
});
exports.config = {
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
