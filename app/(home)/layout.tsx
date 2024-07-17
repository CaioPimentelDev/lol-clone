import authService from "@/actions/services/auth-service";
import { HomeNavbar } from "@/components/navigation/homeNavbar";
import { Navbar } from "@/components/navigation/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";
import { db } from "@/libs/db";
import { redirect } from "next/navigation";



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const profile = await authService.currentProfile();

    if (!profile) {
        return redirect("/newprofile")
    }


    const moedas = await db.profile.findUnique({
        where: {
            riotId: profile
        },
        select: {
            rp: true,
            ea: true
        }
    })
    if (moedas == null) {
        redirect("dsad")
    }


    return (
        <div className="grid grid-cols-[auto,17.5vw] relative h-full w-full">
            <Navbar ea={moedas.ea} rp={moedas.rp} />
            <div className="pt-[100px] relative">
            {/*<div className="pt-[135px] pb-[50px] relative px-[43px]">*/}
                {children}
            </div>
            <Sidebar nickname={profile} />
        </div>
    );
}
