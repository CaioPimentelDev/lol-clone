"use client"

import { InputP } from "@/components/form/inputP";
import { ArrowRight, Check, Square, SquareCheck } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaApple, FaXbox } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image'
import Link from 'next/link'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  login: z.string().regex(/^[a-zA-Z0-9]+$/, {
    message: "Caracteres especiais não são permitidos no nome de usuário",
  }),
  password: z.string()
})

type LoginSchema = z.infer<typeof loginSchema>

export default function Home() {
  const [test, setTest] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: zodResolver(loginSchema)
  })

  const handleLogin = async (data: LoginSchema) => {
    try {
      await axios.post("/api/login", data)

      router.refresh()
      router.push("/home")
    } catch (error) {
      console.log("não foi possivel fazer o login" + error)
    }
  }

  const handlekeep = () => {
    if (test == true) {
      setTest(false)
    } else {
      setTest(true)
    }
  }

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col h-full w-[400px] items-center justify-center gap-4 px-[50px]">
        <Image src="/logo.png" width={120} height={120} alt={"logo"} />
        <form className="flex flex-col w-full items-center" onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col w-full items-center justify-center gap-7 mt-[50px] mb-[165px]">
            <div className="flex h-[26px] justify-end"><span className="font-bold text-[22px] text-[#343434] p-0 ">Fazer login</span></div>
            <div className="flex flex-col w-full gap-4">
              <InputP
                {...register("login")}
                page="login"
                type="text"
                id="login"
                placeholder="nome de usuário"
                error={!!errors.login?.message}
                helperText={errors.login?.message}
              />
              <InputP
                {...register("password")}
                page="login"
                type="password"
                id="password"
                placeholder="senha"
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
            </div>
            <div className="grid grid-cols-4 gap-2 w-full h-[30px]">
              <button className="bg-blue-500 hover:bg-blue-600 text-white w-auto flex items-center justify-center rounded-md"><FaFacebook /></button>
              <button className="border-[.1rem] hover:bg-gray-200  border-gray-200 text-white w-auto flex items-center justify-center rounded-md"><FcGoogle /></button>
              <button className="bg-black hover:bg-gray-800 text-white w-auto flex items-center justify-center rounded-md"><FaApple /></button>
              <button className="bg-green-700 hover:bg-green-800 text-white w-auto flex items-center justify-center rounded-md"><FaXbox /></button>
            </div>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex w-full h-[20px] justify-start items-center gap-2 cursor-pointer" onClick={handlekeep}>
              {test == false && <button><Square className="w-[17px] h-[17px] bg-[#ECECEC] text-transparent rounded" /></button>}
              {test == true && <button className={`p-[2px]  rounded ${isHovered ? "bg-red-600" : "bg-red-500"}`}><Check className="w-[13px] h-[13px] text-white stroke-[3px]" /></button>}
              <span
                className="font-semibold text-sm" >Manter login</span>
            </div>
          </div>
          <button className="bg-red-500 p-[15px] rounded-[20px] mb-[50px]"><ArrowRight className="h-[35px] w-[35px] text-white" /></button>
        </form>
        <div className="display:block flex flex-col items-center justify-center gap-2">
          <Link className="font-extrabold text-[11px] text-[#6b6b6b]" href={'/sign-up'}>NÃO CONSEGUE INICIAR SESSÃO?</Link>
          <Link className="font-extrabold text-[11px] text-[#6b6b6b]" href={'/sign-up'}>CRIAR CONTA</Link>
          <span className="font-extrabold text-[9px] text-[#adadad] text-center pt-2">ESTE APLICATIVO É PROTEGIDO POR HCAPTCHA. A POLÍTICA DE PRIVACIDADE E OS TERMOS DE SERVIÇO SÃO APLICÁVEIS.</span>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image className="object-cover object-center" src={"/wallpaper.jpg"} fill={true} alt={"wallpaper"} />
      </div>
    </div>
  )
}
