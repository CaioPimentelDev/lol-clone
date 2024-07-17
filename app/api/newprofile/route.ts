import { db } from "@/libs/db"
import authService from "@/actions/services/auth-service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const userId = await authService.currentUser() as string
    const { riotId } = await request.json()

    const existProfile = await db.profile.findUnique({
        where: {
            riotId: riotId
        }
    })
    if (existProfile) {
        return new Response("Este nickname já está em uso.", { status: 409 })
    }


    const profileWithSpoils = await db.profile.create({
        data: {
            riotId,
            ea: 0,
            rp: 0,
            user: { connect: { id:userId } },
            spoils: {
                create: [
                    {
                        type: "CHEST",
                        qnt: 5,
                        image: "/chest.png",
                        name: "Chest"
                    },
                    {
                        type: "KEY",
                        qnt: 5,
                        image: "/chest.png",
                        name: "Key"
                    },
                ]
            }
        },
        include: {
            spoils: true
        }
    });


    await authService.newToken(profileWithSpoils.riotId)


    return NextResponse.json(profileWithSpoils)
}