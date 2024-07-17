import { cn } from "@/libs/cn";
import React, { useState } from 'react';

interface InputPProps {
    page: string;
    type: string;
    id: string;
    placeholder: string;
    error?: boolean;
    helperText?: string
}


export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const InputP = React.forwardRef<HTMLInputElement, InputPProps>((
    {
        page,
        type,
        id,
        placeholder,
        error = false,
        helperText,
        ...props
    },
    ref
) => {

    const [isActive, setIsActive] = useState(false)

    const verifyInput = () => {
        let valor = (document.getElementById(id) as HTMLInputElement).value;

        if (valor.trim() === "") {
            setIsActive(false)
        }
    }

    return (
        <div className="relative w-full">
            <label className={cn(
                "absolute px-[10px] pt-1 font-extrabold text-[#868686] text-[0.65rem] cursor-text transition-all duration-300",
                isActive == false && page == "login" && "p-[18px]",
                page == "register" && "px-[0px] pt-0 text-[#ddd4c3] text-[15px] font-bold",
                isActive == false && page == 'register' && ' w-full text-center text-[1.6rem] pt-[4%] font-[400] text-[#c4b998]'
            )}
                htmlFor={id}
            >{placeholder}</label>
            <input
                onFocus={() => setIsActive(true)}
                onBlur={verifyInput}
                type={type}
                id={id}
                ref={ref}
                {...props}
                className={cn(
                    "w-full px-[10px] pt-[20px] pb-[5px] font-semibold bg-[#ECECEC] rounded focus:outline-black focus:border-black focus:ring-black mb-[10px]",
                    page == "register" && "px-[0px] pb-0 text-[1.6rem] text-[#c4b998] bg-transparent border-b-[1px] border-[#7e633b] rounded-none focus:outline-0 focus:border-[#7e633b]",
                    page == "register" && isActive == true && error && " focus:border-red-500",
                    page == "register" && error && " border-red-500"
                )} />
            {error && helperText && page == "register" && (
                <p className="text-red-500">{helperText}</p>
            )}
            {error && helperText && page == "login" && (
                <p className="text-purple-300">{helperText}</p>
            )}
        </div>
    )
})