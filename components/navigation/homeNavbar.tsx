

interface HomeNavbarProps {
    children: React.ReactNode
}

export const HomeNavbar = ({children}:HomeNavbarProps ) => {
    return (
        <div className='flex absolute left-[43px] top-[110px] z-10'>
            {children}
        </div>
    )
}
