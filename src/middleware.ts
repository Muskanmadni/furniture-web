import { clerkMiddleware} from "../node_modules/@clerk/nextjs/dist/types/server/clerkMiddleware";

export default  clerkMiddleware({
  
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ]
};