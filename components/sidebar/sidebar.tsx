import { Profile } from "./profile"
import { Social } from "./social"

interface SidebarProps{
    nickname: string
}

export const Sidebar = ({
    nickname
}: SidebarProps) =>{

    return(
        <div className="bg-[#010a13] h-full">
            <Profile nickname={nickname}/>
            <Social/>
        </div>
    )
}