"use client"

import { cn } from '@/libs/cn';
import React from 'react';


interface FormButtonProps {
    children: React.ReactNode,
    page: string,
}



export const FormButton = ({
    children,
    page,
}: FormButtonProps) => {


    return (
        <div className={cn(
            page == "register" && "w-[236px] h-[60px] p-[.1rem] bg-gradient-to-b from-[#ecc572] to-[#815500] mt-[30px] mb-[20px]",
            page =="client" && " p-[.1rem] bg-gradient-to-b from-[#ecc572] to-[#815500] hover:bg-gradient-to-b hover:from-[#f0e6d1] hover:to-[#c89c3d]"
        )}>
            <button type='submit' className={cn(
                " w-full h-full bg-[#111] text-[#937341]",
                page == "register" && "tracking-[2px]",
                page == "client" && "px-[24px] py-[6px] text-[#cdbe91] bg-[#1e2328]" 
            )}>
                {children}
            </button>
        </div >
    )
}