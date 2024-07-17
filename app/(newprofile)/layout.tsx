import authService from "@/actions/services/auth-service";
import { redirect } from "next/navigation";



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const profile = await authService.currentProfile();

    if (profile) {
        return redirect("/home")
    }


    return (
        <div>
            {children}
        </div>
    );
}
