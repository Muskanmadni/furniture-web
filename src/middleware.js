"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// middleware.js
var server_1 = require("@clerk/nextjs/server");
exports.default = (0, server_1.clerkMiddleware)();
exports.config = {
    matcher: [
        /*
         * Match all request paths except for the ones listed in the regex.
         * This is the correct regex for middleware.
         */
        '/((?!api|_next|.*\\.(?:html|css|js|json|ico|svg|woff2?|ttf|eot|webmanifest|png|jpe?g|gif|bmp|tiff?|webp|pdf|txt))).*',
        '/api/(.*)', // Match all API routes
        '/trpc/(.*)', // Match all tRPC routes (if you're using tRPC)
    ],
};
// Optional matcher for the /app directory (if using the App Router and have unprotected routes):
// export const config = {
//   matcher: [
//     '/((?!api|_next|.*\\.(?:html|css|js|json|ico|svg|woff2?|ttf|eot|webmanifest|png|jpe?g|gif|bmp|tiff?|webp|pdf|txt))).*',
//     '/api/(.*)',
//     '/trpc/(.*)',
//     '/app/((?!unprotected-page).*)', // Example: Exclude /app/unprotected-page
//   ],
// };
