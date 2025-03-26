import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Custom logic can be added here if needed
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/", // Redirect unauthenticated users to home page
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"], // Protect specific routes
};
