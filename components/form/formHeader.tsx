"use client"

interface FormHeaderProps {
    children: React.ReactNode
}

export const FormHeader = ({children}: FormHeaderProps) => {
    return (
        <header className="flex flex-col items-center">
            {children}
        </header>
    )
}