"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useModal } from "../hooks/modal-store"
import Image from "next/image"


export const SpoilsLeft = () => {

    type Sorta = {
        id?: string,
        qnt?: number,
        type?: string
    }
    interface ArrayType {
        id: string,
        qnt: number,
        type: string,
        image: string,
        name: string
    }
    const [test, setTest] = useState<object>({})
    const [sort, setSort] = useState<Sorta>({})
    const [key, setKey] = useState<Sorta>({})
    const [skin, setSkin] = useState<ArrayType[]>([])

    const spoils = async () => {
        const response = await axios.get("/api/spoils")
        const data = response.data

        const dadosMapeados: object = data.map((item: { type: string; qnt: number; id: string, image: string, name: string }) => ({
            type: item.type,
            qnt: item.qnt,
            id: item.id,
            image: item.image,
            name: item.name
        }))
        setTest(dadosMapeados)



        let sorta: Sorta = {}

        let key = {}

        let skinArray: ArrayType[] = []

        Object.values(dadosMapeados).forEach(e => {
            if (e.type == "CHEST") {
                Object.assign(sorta, e);
            }
            if (e.type == "KEY") {
                Object.assign(key, e);
            }
            if (e.type == "SKIN") {
                skinArray.push({
                    type: e.type,
                    qnt: e.qnt,
                    id: e.id,
                    image: e.image,
                    name: e.name
                });
            }
        });


        console.log(skinArray)
        setSort(sorta)
        setKey(key)
        setSkin(skinArray)


    }


    useEffect(() => {
        spoils()

    }, [])

    const { onOpen } = useModal()



    return (
        <div className="h-[590px] w-full  overflow-scroll">
            <div className="mb-[25px]">
                <div className="pb-[3px] mb-[25px] border-b-2 border-[#a27a2e] w-[400px]"><span className="text-white">MATERIAIS</span></div>
                <div className="grid grid-cols-4 w-[400px] gap-4">
                    {sort &&
                        <button className="relative  h-[85px] border-2 border-[#a27a2e] hover:border-[#dfc38a]" key={sort.id} onClick={() => onOpen("chest")}>
                            <Image src={"/chest.png"} fill alt={"chest"} />
                            <span className="absolute top-[3.5rem] right-[0.25rem] text-white">{sort.qnt}</span>
                        </button>
                    }
                    {key &&
                        <button className="relative bg-green-400 h-[85px] border-2 border-[#a27a2e]  hover:border-[#dfc38a]" key={key.id} >
                            <span className="absolute top-[3.5rem] right-[0.25rem] text-white">{key.qnt}</span>
                        </button>
                    }
                </div>
            </div>

            <div className="mb-[25px]">

                <div className="pb-[3px] mb-[25px] border-b-2 border-[#a27a2e] w-[400px]"><span className="text-white">SKINS</span></div>
                <div className="grid grid-cols-4 w-[400px]  gap-4">
                    {skin.map(e => {
                        return (
                            <button className="relative  h-[85px] border-2 border-[#a27a2e] hover:border-[#dfc38a]" key={e.id} onClick={() => onOpen("skin", e)}>
                            </button>
                        )
                    })
                    }

                </div>

            </div>

        </div>
    )
}