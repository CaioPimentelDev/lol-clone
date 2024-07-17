"use client"

import { useModal } from "../hooks/modal-store"
import { Chest } from "./chest"
import { Skin } from "./skin"



export const SpoilsRight = () => {

    const { type } = useModal()


    return (
        <div className="flex h-full w-full text-white justify-center">
            {type == "chest" && (
                <Chest />
            )}
            
            {type == "skin" && (
                <Skin />
            )}
        </div>
    )
}