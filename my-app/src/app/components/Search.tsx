import Image from "next/image"
import IconSearch from "@/app/assets/icon-search.svg"


export default function Search( ) {
    return(
        <div className="flex items-center gap-4">
            <Image 
             src={IconSearch}
             alt="Search"
            />
            <input type="text" className="bg-transparent outline-none pr-5 text-white placeholder:text-white"  placeholder="Buscar"/>
        </div>
    );
}