"use client"

import { Footer } from "@/components/footer"
import { FormButton } from "@/components/form/formButton"
import { FormHeader } from "@/components/form/formHeader"
import { InputP } from "@/components/form/inputP"
import { RiotLogo } from "@/components/logos/riot-logo"
import { Steps } from "@/components/steps/steps"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const registerSchema = z.object({
    email: z.string().min(3, "precisa ter pelo menos 3 caracteres").email("precisa ter email")
})

type RegisterSchema = z.infer<typeof registerSchema>

const SignUpPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        mode: "onBlur",
        reValidateMode: "onSubmit",
        resolver: zodResolver(registerSchema)
    })

    

    const router = useRouter()

    const handleRegistration = (data: RegisterSchema) => {
        localStorage.setItem("email", data.email)
        router.push("/sign-up/date-of-birth")
    }

    return (
        <div className="flex flex-col h-full w-full items-center justify-between bg-[#111] overflow-auto">
            <Image src={"/bg-welcome.jpg"} height={0} width={0} alt={""} className="h-[100vh] w-[100vw] object-cover bg-cover bg-bottom blur-[10px] absolute inset-0 opacity-20" />
            <RiotLogo />
            <div className="flex flex-col z-10 w-full items-center justify-center">
                <Image className="absolute bottom-[calc(100%-139px)]" src={"hangtag.svg"} height={456} width={18} alt={"hangtag"} />
                <FormHeader>
                    <h1 className="text-white text-[80px] font-[600] tracking-[6px]">SUA LENDA COMEÇA AGORA</h1>
                    <span className="text-[#d5b26e] text-[18px] tracking-[1px]">PRIMEIRO, PRECISAMOS DO SEU E-MAIL</span>
                </FormHeader>
                <Image className="py-[40px]" src={"/divider.png"} height={166} width={1099} alt={"div"} />
                <form noValidate onSubmit={handleSubmit(handleRegistration)} className="flex flex-col w-[458px] items-center justify-center gap-4">
                    <InputP
                        {...register("email")}
                        page="register"
                        type="email"
                        id="email"
                        placeholder="Insira o e-mail aqui"
                        error={!!errors.email?.message}
                        helperText={errors.email?.message}
                    />
                    <FormButton page={"register"} >COMEÇAR</FormButton>
                </form>
                <span className="text-[#937341] mt-[10px] tracking-[2px] text-[10px]">JÁ POSSUI UMA CONTA? <Link className="text-[#c4b998] underline" href={"/"}>CLIQUE PARA ENTRAR</Link></span>
                <Steps />
            </div>
            <Footer />
        </div>
    )
}

export default SignUpPage