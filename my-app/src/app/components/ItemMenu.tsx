import Image from "next/image"

import Arrow from "@/app/assets/arrow-down.svg"

type Props = {
    name: string
}

export default function ItemMenu ({ name }: Props) {

    return(
        <button className="flex items-center gap-3">
            <span className="text-white font-bold">{name}</span> 
            <Image 
            src={Arrow}
            alt="Arrow dropdown"
            />   
        </button>
    )
}