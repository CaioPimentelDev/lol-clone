import Link from "next/link"
import { BrRatings } from "./logos/br-ratings"

export const Footer = () => {
    return (
        <div className="flex flex-col w-full">
            <BrRatings />
            <div className="flex flex-col items-center text-[#997338] text-[14px] tracking-[.5px] gap-2 mt-3 z-10">
                <p>Este site é protegido por hCaptcha; sua <Link className="underline" href={"#"}>Aviso de privacidade</Link> e seus <Link className="underline" href="#">Termos de Serviço</Link> são aplicáveis.</p>
                <p>© 2024 Riot Games, inc. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}