import { NextResponse } from 'next/server';

export function middleware(request) {
   let response = NextResponse.next();

   if (publicRoutes.includes(request.nextUrl.pathname) && request.cookies.has('access')) {
      response = NextResponse.redirect(new URL('/', request.url));
   }

   return response;
}

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};

const publicRoutes = ['/sign-in', '/sign-up'];
