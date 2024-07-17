import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"

export const Shop = () => {

    const array = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Belveth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "Draven", "DrMundo", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "KSante", "Leblanc", "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "Milio", "MissFortune", "MonkeyKing", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "Renata", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"]


    interface ArrayType {
        productName: string,
        price: number
    }
    const [champions, setChampions] = useState<ArrayType[]>([])


    const fetchData = async () => {
        try {
            const response = await axios.get("/api/champions")
            setChampions(response.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }



    useEffect(() => {
        fetchData()



    }, [])

    const onclick = async (data: ArrayType) => {
        try {
            const response = await axios.patch("/api/champions", data)

        } catch (err) {
            console.log(err + "duah")
        }

    }
    console.log(champions)

    return (
        <div className="flex w-full h-full ">
            <div className="flex-1 bg-black h-full"></div>
            <div className="grid grid-cols-4 gap-2 h-[89vh] overflow-scroll">
                {array.map(e => {
                    return (
                        <button className="flex items-end justify-center relative h-[250px] w-[250px]" onClick={() => onclick({ productName: e, price: 4 })} key={e}>
                            <Image className="absolute -z-10" src={"/chest.png"} fill alt={"chest"} />
                            <div className="flex flex-col items-center">
                                <span className="text-white">{e}</span>
                                <span className="text-white">3400</span>
                            </div>
                        </button>
                    )
                })
                }
            </div>
        </div>
    )
}