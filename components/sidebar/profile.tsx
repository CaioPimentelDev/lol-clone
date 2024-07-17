
import { Bell } from "lucide-react"
import Image from "next/image"

interface ProfileProps{
    nickname: string
}

export const Profile = ({
    nickname
}:ProfileProps) => {
    return (
        <div className="grid grid-cols-[75px,auto] h-[100px] border-b-[1px] border-[#3c4444] p-2">
            <div className="flex items-center h-full">
                {/*tem que arrumar essa poha*/}
                <Image className="rounded-full h-[75px] w-[75px]" src="/icone.png" height={75} width={75} alt={"logo"} />
            </div>
            <div className="flex flex-col justify-end h-full float-right pb-2 px-3">
                <p className="text-[#f0e6d2] font-semibold text-lg p-0 m-0">{nickname}</p>
                <span className="flex items-center justify-between"><div className="flex items-center gap-1 text-green-600"><div className="flex justify-center items-center h-[15px] w-[15px] p-[.10rem] bg-green-400 rounded-xl"><div className="w-full h-full bg-green-600 rounded-xl"></div></div>fdssdf</div><Bell className="text-gray-600" /></span>
            </div>
        </div>
    )
} 