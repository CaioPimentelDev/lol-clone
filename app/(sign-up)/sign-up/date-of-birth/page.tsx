"use client"

import { Footer } from "@/components/footer"
import { FormButton } from "@/components/form/formButton"
import { FormHeader } from "@/components/form/formHeader"
import { RiotLogo } from "@/components/logos/riot-logo"
import { Steps } from "@/components/steps/steps"
import Image from "next/image"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const storedEmail = localStorage.getItem('email');
if (!storedEmail) {
    redirect("/sign-up")
}

export default function DateOfBirthPage()  {

    const dateSchema = z.object({
        day: z.number().min(1, "campo obrigatório").max(31),
        month: z.string().refine((value) => meses.includes(value), {
            message: 'Mês inválido'
        }),
        year: z.number().min(1900, "campo obrigatório").max(2024)
    })

    type DataSchema = z.infer<typeof dateSchema>


    const router = useRouter()

    const [dia, setDia] = useState('DIA');
    const [mes, setMes] = useState('MÊS');
    const [ano, setAno] = useState('ANO');

    const [age, setAge] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm<DataSchema>({
        mode: "onChange",
        reValidateMode: "onSubmit",
        resolver: zodResolver(dateSchema)
    })

    const anoAtual = new Date().getFullYear();

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];


    useEffect(() => {
        if (dia != "DIA" && mes != "MÊS" && ano != "ANO") {
            setAge(dia + "/" + mes + "/" + ano)
        }
    }, [dia, mes, ano])


    const handleRegistration = () => {
        localStorage.setItem("age", age)
        router.push("/sign-up/registration")
    }

    return (
        <div className="flex flex-col h-full w-full items-center justify-between bg-[#111]">
            <Image className="h-full w-full bg-cover bg-center fixed inset-0" src={"/bg-date-of-birth.jpg"} height={0} width={0} alt={""} />
            <RiotLogo />
            <div className="flex flex-col z-10 w-full items-center justify-center">
                <FormHeader>
                    <h1 className="text-white text-[45px] font-[600] tracking-[6px] mb-[87px]">QUANDO VOCÊ NASCEU?</h1>
                </FormHeader>

                <form onSubmit={handleSubmit(handleRegistration)} className="flex flex-col w-[458px] items-center justify-center">

                    {errors && (
                        <div style={{ position: 'absolute', top: '39%' }}>
                            <p className="text-red-500">insira uma data válida</p>
                        </div>
                    )}
                    <div className='flex w-[315px] justify-between mb-[65px]'>
                        <select {...register("day", { setValueAs: (value) => parseInt(value, 10) })} id="dia" value={dia} onChange={(e) => setDia(e.target.value)} className="border-2 border-[#7e633b] hover:border-[#ecc572] bg-[#111] text-[#c4b998] py-[6px] pr-[35px] pl-[15px] text-[.9rem] appearance-none">
                            <option disabled>DIA</option>
                            {Array.from({ length: 31 }, (_, index) => index + 1).map((value) => (
                                <option key={value} value={String(value)}>{value}</option>
                            ))}
                        </select>
                        <select {...register("month")} id="mes" value={mes} onChange={(e) => setMes(e.target.value)} className="border-2 border-[#7e633b] hover:border-[#ecc572] bg-[#111] text-[#c4b998] py-[6px] pr-[35px] pl-[15px] text-[.9rem] appearance-none">
                            <option disabled>MÊS</option>
                            {meses.map((month, index) => (
                                <option key={index} value={month}>{month}</option>
                            ))}
                        </select>
                        <select {...register("year", { setValueAs: (value) => parseInt(value, 10) })} id="ano" value={ano} onChange={(e) => setAno(e.target.value)} className="border-2 border-[#7e633b] hover:border-[#ecc572] bg-[#111] text-[#c4b998] py-[6px] pr-[35px] pl-[15px] text-[.9rem] appearance-none">
                            <option disabled>ANO</option>
                            {Array.from({ length: anoAtual - 1900 + 1 }, (_, index) => index + 1900).map((value) => (
                                <option key={value} value={String(value)}>{value}</option>
                            )).reverse()}
                        </select>
                    </div>
                    <FormButton page={"register"}>AVANÇAR</FormButton>
                </form>
                <Steps />
            </div>
            <Footer />
        </div>
    )
}