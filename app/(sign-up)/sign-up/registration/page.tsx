"use client"

import { Footer } from "@/components/footer"
import { FormButton } from "@/components/form/formButton"
import { FormHeader } from "@/components/form/formHeader"
import { InputP } from "@/components/form/inputP"
import { RiotLogo } from "@/components/logos/riot-logo"
import { Steps } from "@/components/steps/steps"
import Image from "next/image"
import { useEffect, useState } from "react"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { redirect, useRouter } from "next/navigation"

const loginSchema = z.object({
    login: z.string().min(3).regex(/^[a-zA-Z0-9]+$/, {
        message: "Only letters and numbers are allowed.",
      }),
    password: z.string().min(8),
    confirmPassword: z.string()
}).refine((value) => value.password === value.confirmPassword, {
    path: ["confirmPassword"], message: "as senhas precisam ser iguais"
})

type LoginSchema = z.infer<typeof loginSchema>

export default function ResgistrationPage () {
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(loginSchema)
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedEmail = localStorage.getItem('email');
            const storedAge = localStorage.getItem('age');
            if(!storedEmail){
                redirect("/sign-up")
            }
            
            if(!storedAge){
                redirect("/sign-up/date-of-birth")
            }
            setEmail(storedEmail!);
            setAge(storedAge!);
        }

    }, []);

    const onSubmit = async (data: LoginSchema) => {
        try {
            await axios.post("/api/registration", {...data, email})


        } catch (error) {
            console.log("não foi possivel pegar os dados do registro" + error)
        }
    }

    return (
        <div className="flex flex-col h-[100vh] w-full items-center justify-between bg-[#111]">
            <Image className="h-full w-full bg-cover bg-center fixed inset-0" src={"/shurima-bg.jpg"} height={0} width={0} alt={""} />
            <RiotLogo />
            <div className="flex flex-col z-10 w-full items-center justify-center">
                <FormHeader>
                    <h1 className="text-white text-[42px] font-[600] tracking-[6px] uppercase">Por fim, crie um nome de usuário e senha</h1>
                    <h4 className="text-[#d5b26e] text-[20px] tracking-[2px] mb-[60px]">você escolherá seu nome no jogo mais tarde</h4>
                </FormHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[458px] items-center justify-center gap-4">

                    <InputP
                        {...register("login")}
                        page="register"
                        type="text"
                        id="login"
                        placeholder="Nome de Usuário"
                        error={!!errors.login?.message}
                        helperText={errors.login?.message}
                    />
                    <InputP
                        {...register("password")}
                        page="register"
                        type="password"
                        id="password"
                        placeholder="Senha"
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                    />
                    <InputP
                        {...register("confirmPassword")}
                        page="register"
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirmar Senha"
                        error={!!errors.confirmPassword?.message}
                        helperText={errors.confirmPassword?.message}
                    />

                    <FormButton page="register">COMEÇAR</FormButton>
                </form>


                <Steps />
            </div>
            <Footer />
        </div>
    )
}
