"use client"
import {useState} from "react";
import Image from "next/image";
import NavigationBar from "./NavigationBar";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navbar() {
    const pathname = usePathname()
    const [Show, setShow] = useState<boolean>(false)
    const toggleShow = () => setShow(!Show)
    
    return (
        <header className="bg-MainBg rounded-t-xl border border-GeneralBorder border-solid px-5 select-none">
            <div className="flex justify-between ">
                <div className="pe-[10%] flex items-center">
                    <span className="py-4"><Link href="/">Laeth Nueirat</Link></span>
                </div>
                <nav className=" justify-between IPhone:flex hidden flex-1 items-center">
                    <ul className="flex h-full">
                        <li className={`border-x border-GeneralBorder border-solid px-4 h-full flex items-center ${pathname === '/' ? 'text-white' : ''}`}><Link href="/">_hello</Link></li>
                        <li className={`border-e border-GeneralBorder border-solid px-4 h-full flex items-center ${pathname === '/About' ? 'text-white' : ''}`}><Link href="/About">_about-me</Link></li>
                        <li className={`border-e border-GeneralBorder border-solid px-4 h-full flex items-center ${pathname === '/Projects' ? 'text-white' : ''}`}><Link href="/Projects">_projects</Link></li>
                    </ul>
                    <div className="h-full">
                        <span className={`border-s border-GeneralBorder border-solid ps-4 h-full flex items-center ${pathname === '/Contact' ? 'text-white' : ''}`}><Link href="/Contact">_contact-me</Link></span>
                    </div>
                </nav>
                <div className="flex IPhone:hidden cursor-pointer w-8">
                    <Image src="/NavbarIcon.svg" alt="NavbarOpenIcon" loading={"lazy"} width={20} height={20} onClick={toggleShow} />
                </div>
            </div>
            <NavigationBar toggleShow={toggleShow} Show={Show} pathname={pathname}  />
        </header>
    )
}
