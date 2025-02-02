import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!_next|[^?]\\.(?:html?|css|js(?!on)|jpeg|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifes', '/(api|trpc)(.)'],
};

console.log("Clerk Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY); // Check if it's being read
console.log("Clerk Secret Key:", process.env.CLERK_SECRET_KEY ? "Set" : "Not Set"); // Check if it's set (don't log the value!)