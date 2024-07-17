import { type NextRequest, NextResponse } from "next/server";
import authService from "./actions/services/auth-service";

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|^/_next/data/).*)',

};

const publicRoutes = ["/", "/sign-up", "/sign-up/date-of-birth", "/sign-up/registration"];

export async function middleware(req: NextRequest) {



    const pathname = req.nextUrl.pathname;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    const session = await authService.isSessionValid();
    if (!session) {
        
        return NextResponse.redirect(new URL('/', req.url));
    }


    return NextResponse.next();
}
