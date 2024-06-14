import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const securedRoutes = createRouteMatcher([
  "/",
  "/previous",
  "/recordings",
  "/upcoming",
  "/ personal-room",
  "/meetings(.*)",
])

export default clerkMiddleware((auth, req) => {
  if (securedRoutes(req)) auth().protect()
})
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
