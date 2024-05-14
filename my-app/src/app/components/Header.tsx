import Image from "next/image"

import ItemMenu from "./ItemMenu";

import Search from "./Search";
import IconUser from "@/app/assets/icon-user.svg";

import Logo from "@/app/assets/logo.svg"
import Container from "./Container";

export default function Header() {
    return (
        <header className="relative flex justify-between items-center w-full h-20 pl-10 bg-primary-orange">

            <div className="flex w-full max-w-[1246] px-[15px] mx-auto">
                
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14 "> 
                        <Image 
                        src={Logo} 
                        alt="Logo" 
                        />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu
                                 name="Para você"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                 name="Para Empresa"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                 name="Serviços"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                 name="Ajuda"
                                />
                            </li>
                        </ul>
                    </div>
                    <Search />
                </div>
            </div>
                <button className="flex items-center gap-16 bg-primary-blue h-20 pl-10">
                    <Image 
                     src={IconUser}
                     alt="iconUser"
                    />
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
        </header>
    )
}

