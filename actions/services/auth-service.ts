import * as jose from "jose"
import { cookies } from 'next/headers'



async function openSessionToken(token: string) {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
    const { payload } = await jose.jwtVerify(token, secret)

    return payload
}

async function createSessionToken(payload = {}) {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
    const session = await new jose.SignJWT(payload).setProtectedHeader({
        alg: "HS256"
    })
        .setExpirationTime("1d")
        .sign(secret)

    const { exp } = await openSessionToken(session)

    cookies().set('session', session, { expires: (exp as number) * 1000, path: "/", httpOnly: true })

    return session
}
async function currentUser() {
    const sessionCookie = cookies().get('session')

    if (sessionCookie) {
        const { value } = sessionCookie;
        const { userId } = await openSessionToken(value);
        return userId
    }
}

async function currentProfile() {
    const sessionCookie = cookies().get('session')

    if (sessionCookie) {
        const { value } = sessionCookie;
        const { profile } = await openSessionToken(value);
        return profile as string;
    } else {
        return false;
    }
}

async function isSessionValid() {
    const sessionCookie = cookies().get('session')

    if (sessionCookie) {
        const { value } = sessionCookie;
        const { exp } = await openSessionToken(value);
        const currentDate = new Date().getTime();

        return (exp as number) * 1000 > currentDate;
    }
}

async function newToken(profile: string) {

    
    const sessionCookie = cookies().get('session');
    if (!sessionCookie) {
        throw new Error('Cookie de sessão não encontrado.');
    }
    const { value } = sessionCookie;
    const payload = await openSessionToken(value);

    payload.profile = profile;

    const newSession = await createSessionToken(payload)

    cookies().set("session", newSession)

}


const authService = {
    openSessionToken,
    createSessionToken,
    isSessionValid,
    currentProfile,
    currentUser,
    newToken
}

export default authService