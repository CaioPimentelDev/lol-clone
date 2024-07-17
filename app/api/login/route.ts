import authService from "@/actions/services/auth-service";
import { db } from "@/libs/db";
import * as bcrypt from 'bcrypt';
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { login, password } = await req.json()

    const loginM = await db.user.findFirst({
        where: {
            login: login

        }
    })

    if (!loginM) {
        redirect("/home")
    }



    const isMatch = await bcrypt.compare(password, loginM.password)

    if (isMatch) {

        const profile = await db.profile.findFirst({
            where: {
                userId: loginM.id
            }
        })

        await authService.createSessionToken({ userId: loginM.id, ...(profile ? { profile: profile.riotId } : {}) })
    }


    return NextResponse.json(loginM);
}
