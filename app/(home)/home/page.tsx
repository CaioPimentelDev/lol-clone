import { FormButton } from '@/components/form/formButton'
import { HomeNavbar } from '@/components/navigation/homeNavbar'
import Image from 'next/image'
import Link from 'next/link'


export default function HomePage() {
    return (

        
            <div className="flex flex-col  h-full w-full justify-between pt-[35px] pb-[50px] px-[43px]">

                {/* background */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#090a11] from-5% to-70% to-transparent">
                    <Image className=" object-cover object-right -z-20" src={"/yone.jpeg"} fill={true} alt={"wallpaper"} />
                </div>

                <HomeNavbar>
                    <Link className='px-[17px] text-[#cdbe91] hover:text-[#f0e6d2] text-[15px] font-medium tracking-[1px]' href={'/home'}>VISÃO GERAL</Link>
                    <Link className='px-[17px] text-[#cdbe91] hover:text-[#f0e6d2] text-[15px] font-medium tracking-[1px]' href={'/home/patchnote'}>NOTAS DE ATUALIZAÇÃO</Link>
                    <Link className='px-[17px] text-[#cdbe91] hover:text-[#f0e6d2] text-[15px] font-medium tracking-[1px]' href={'#'}>CBLOL</Link>
                </HomeNavbar>


                {/* rotação de campeão */}
                <div className='flex w-full relative justify-end text-[15px]'><FormButton page="client">Rotação de Campeões grátis</FormButton></div>


                {/* texto em destaque */}
                <div className='flex flex-col relative justify-between w-full h-[240px]'>
                    <div className='w-[500px]'>
                        <h1 className="text-[#f0e6d2] text-[50px] font-semibold leading-none">TEMA DO CAMPEÃO SKARNER</h1>
                    </div>
                    <div className='w-[400px]'>
                        <p className='text-[#a09b8c] text-[17px]'> Sinta a terra tremer com o tema de Skarner, o Soberano Primordial.</p>
                    </div>
                    <div className='flex font-semibold text-[18px]'>
                        <FormButton page="client">SAIBA MAIS</FormButton>
                    </div>

                </div>


                {/* grid com as notícias */}
                <div className='relative grid grid-cols-8 w-full  gap-4'>
                    <div className='flex flex-col gap-1 col-span-2  cursor-pointer'>
                        <div className=' border-[1px] h-[170px] border-[#3c4444] hover:border-[#ffffaf] bg-blue-400 '></div>
                        <p className='text-[#cdbe91] font-bold'>Skarner Ferrão Cósmico</p>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2  cursor-pointer'>
                        <div className=' border-[1px] h-[170px] border-[#3c4444] hover:border-[#ffffaf] bg-blue-400 '></div>
                        <p className='text-[#cdbe91] font-bold'>Skarner Ferrão Cósmico</p>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2  cursor-pointer'>
                        <div className=' border-[1px] h-[170px] border-[#3c4444] hover:border-[#ffffaf] bg-blue-400 '></div>
                        <p className='text-[#cdbe91] font-bold'>Skarner Ferrão Cósmico</p>
                    </div>
                    <div className='flex flex-col gap-1 col-span-1  cursor-pointer'>
                        <div className=' border-[1px] h-[170px] border-[#3c4444] hover:border-[#ffffaf] bg-blue-400'></div>
                        <p className='text-[#cdbe91] font-bold'>Skarner Ferrão Cósmico</p>
                    </div>
                    <div className='flex flex-col gap-1 col-span-1  cursor-pointer'>
                        <div className=' border-[1px] h-[170px] border-[#3c4444] hover:border-[#ffffaf] bg-blue-400 '></div>
                        <p className='text-[#cdbe91] font-bold'>Skarner Ferrão Cósmico</p>
                    </div>
                </div>


            </div>
    )
}