import authService from "@/actions/services/auth-service";
import { db } from "@/libs/db";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(){

    const profile = await authService.currentProfile();

        if (!profile) {
            throw new Error("Item não encontrado para este perfil.");
        }

    
    const champion = await db.champions.findMany({
        where: {
            ShopRef: profile
        }
    })

    
    

    return NextResponse.json(champion);

}

export async function PATCH(res: Response) {
    try {

        
        const profile = await authService.currentProfile();

        if (!profile) {
            throw new Error("Item não encontrado para este perfil.");
        }
        const{productName, price} = await res.json()

        console.log(productName)

        

        const champion = await db.champions.create({
            data: {
                productName:productName,
                price: price,
                profile: { connect: { riotId: profile } }
            }
        })

        
        

        return NextResponse.json(champion);


    } catch (err) {
        console.error("Erro durante o processamento:", err);
        throw err;
    }
}