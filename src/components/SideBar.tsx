import { BorderAllIcon } from "@radix-ui/react-icons"
import { IoPeople, IoSettings } from "react-icons/io5"
import { ListOrderedIcon } from "lucide-react"

export function SideBar () {
    return(
        <nav className="text-white flex flex-col items-center pl-14 pt-14 ">
            
            <ul className=" mt-[6rem] grid gap-[3.6rem] max-w-[11.5rem]">
                <li>
                    <a href="#" className=" flex items-center gap-[1.6rem] hover:opacity-70 font-bold">
                        <BorderAllIcon width={20} height={20}></BorderAllIcon>
                       <span className="hidden md:flex lg:flex pr-16">Boards</span>
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white  font-medium">
                       <IoPeople height={20} width={20}></IoPeople>
                        <span className="hidden md:flex lg:flex pr-16">Equipes</span>
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white font-medium">
                        <ListOrderedIcon height={20} width={20} />
                        <span className="hidden md:flex lg:flex pr-16">Relatórios</span> 
                    </a>
                </li>

                <li>
                    <a href="#" className=" flex text-[#cab3ff] items-center gap-[1.6rem] hover:text-white font-medium">
                        <IoSettings></IoSettings>
                        <span className="hidden md:flex lg:flex pr-16">Ajustes</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}