import Container from "./Container";

import Image from "next/image";
import PhoneIcon from "@/app/assets/icon-phone.svg";
import SolutionIcon from "@/app/assets/icon-solutions.svg";
import OptionIcon from "@/app/assets/icon-options.svg";
import CardIcon from "@/app/assets/icon-card.svg";

import ImagePhone from "@/app/assets/phone.png"


export default function SectionServices() {
    return(
        <section className="relative flex w-full h-[965px] ">
            <Container>
                <div className="flex-1 max-w-[594px]">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviçoes exclusivo</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6 ">Gerencie suas finanças sem sair de casa</h2>
                    <p className="font-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itáu de forma segura, rápida e o melhor, no conforto de sua casa</p>
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">

                            <Image 
                                src={PhoneIcon}
                                alt="Iconphone"
                            />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Acompanhar sua conta, fazer trasnferências e pagamentos de onde estiver</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">

                            <Image 
                                src={SolutionIcon}
                                alt="Iconsolution"
                            />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Soluções de empresa e renegociação apra organizar suas finanças</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">

                            <Image 
                                src={OptionIcon}
                                alt="IconOPTION"
                            />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Diversas Opções de investimentos, de acordo com o seu perfil de investidor</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">

                            <Image 
                                src={CardIcon}
                                alt="IconCard"
                            />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Acompanhe a fatura do seu cartão</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className=" w-[32%] flex items-center h-full bg-gray-phone">
                <Image 
                    src={ImagePhone}
                    alt="phone"
                    className="translate-x-[-50%]"
                />
            </div>
        </section>
    )
}