import Image from "next/image"
import iconApp from '@/assets/logo.svg'
import boardIcon from '@/assets/boards.svg'
import peoplesICon from '@/assets/pleoples.svg'
import orderIcon from '@/assets/order.svg'
import settingsIcon from '@/assets/settings.svg'

export function SideBar () {
    return(
        <nav className="text-white flex flex-col items-center pl-14 pt-14 ">
            <Image src={iconApp} alt="Logo do site" height={56} width={50} className="logo" />
            
            <ul className=" mt-[6rem] grid gap-[3.6rem] max-w-[11.5rem]">
                <li>
                    <a href="#" className=" flex items-center gap-[1.6rem] hover:opacity-70 font-bold">
                        <Image src={boardIcon} alt="Image of boards" height={20} width={20} className="logo" />
                       <span className="hidden md:flex lg:flex pr-16">Boards</span>
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white  font-medium">
                        <Image src={peoplesICon} alt="Image of boards" height={20} width={20} className="logo opacity-70 " />
                        <span className="hidden md:flex lg:flex pr-16">Equipes</span>
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white font-medium">
                        <Image src={orderIcon} alt="Image of boards" height={20} width={20} className="logo opacity-70 " />
                        <span className="hidden md:flex lg:flex pr-16">Relatórios</span> 
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white font-medium">
                        <Image src={settingsIcon} alt="Image of boards" height={20} width={20} className="logo opacity-70 " />
                        <span className="hidden md:flex lg:flex pr-16">Ajustes</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}