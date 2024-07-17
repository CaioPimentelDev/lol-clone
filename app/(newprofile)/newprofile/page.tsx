"use client"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { useRouter } from "next/navigation";


const nickSchema = z.object({
    riotId: z.string().min(3, "o nickname tem que ter no mínimo 3 caracteres").max(16, "o nickname pode ter no maximo 16 caracteres")
})

type NickSchema = z.infer<typeof nickSchema>


const NewProfile = () => {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<NickSchema>({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(nickSchema)
    })

    
    const onsubmit = async (data: NickSchema) => {
        await axios.post("/api/newprofile", data)

        router.push("/home")
    }


    return (
        <form onSubmit={handleSubmit(onsubmit)}>

            <input {...register("riotId")} type="text" />
            <input type="submit" />
            
        </form>
    )
}
export default NewProfile