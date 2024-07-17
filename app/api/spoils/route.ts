import authService from "@/actions/services/auth-service";
import { db } from "@/libs/db";
import axios from "axios";
import { NextResponse } from "next/server";

import fs from 'fs';
import path from "path";

export async function GET() {
    try {


        const profile = await authService.currentProfile();

        if (!profile) {
            return new NextResponse("Internal Error", { status: 500 });
        }

        const spoils = await db.spoils.findMany({
            where: {
                SpoilsRef: profile
            },
            select: {
                type: true,
                qnt: true,
                id: true,
                image: true,
                name: true
            }
        })

        return NextResponse.json(spoils);

    } catch (error) {
        console.log("erro:", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function PATCH() {
    try {

        const profile = await authService.currentProfile();

        if (!profile) {
            throw new Error("Item não encontrado para este perfil.");
        }



        const chest = await db.spoils.findFirst({
            where: {
                type: "CHEST",
                SpoilsRef: profile
            }
        })

        if (!chest) {
            return new NextResponse("Internal Error", { status: 500 });
        }
        if (chest.qnt < -1) {

            throw new Error("não possui baus suficientes");
        }

        await db.spoils.update({
            where: {
                id: chest.id
            },
            data: {
                qnt: {
                    increment: 1
                }
            }
        })

        const typed = ["SKIN", "CHAMPION", "OTHER"]

        const champions = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Belveth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "Draven", "DrMundo", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "KSante", "Leblanc", "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "Milio", "MissFortune", "MonkeyKing", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "Renata", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"]

        const algoritimo = async () => {
            const sType = Math.floor(Math.random() * typed.length)
            const sChampion = Math.floor(Math.random() * champions.length)

            const data = await axios.get(`https://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_US/champion/${champions[sChampion]}.json`)

            const seila = data.data.data[champions[sChampion]].skins

            const seilaC = seila.slice(1)

            const sSeila = Math.floor(Math.random() * seilaC.length)


            const fk = seilaC[sSeila]

            const nameT = fk.name

            const imagemT = fk.num

            const response = await axios({
                method: 'GET',
                url: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[sChampion]}_${imagemT}.jpg`,
                responseType: 'arraybuffer'
            });

            const image = `${nameT.replace(/\s/g, "_")}.jpg`


            const filePath = path.join(process.cwd(), 'public/skins', image);

            fs.writeFileSync(filePath, response.data);


            console.log(image)

            return { image, nameT }
        }

        const { image, nameT } = await algoritimo()


        const result = await db.spoils.create({
            data: {
                type: "SKIN",
                qnt: 1,
                image: image,
                name: nameT,
                profile: { connect: { riotId: profile } }
            }
        })

        

        return NextResponse.json(result);


    } catch (err) {
        console.error("Erro durante o processamento:", err);
        throw err;
    }
}