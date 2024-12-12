import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Get path
  const pathname = request.nextUrl.pathname
  
  // Redirect root to English
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  const locale = pathname.split('/')[1]
  
  // If invalid locale, redirect to English
  if (!['en', 'vi'].includes(locale)) {
    return NextResponse.redirect(new URL('/en', request.url))
  }
  
  return NextResponse.next()
}
 
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}