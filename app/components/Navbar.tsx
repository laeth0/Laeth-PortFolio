"use client"
import {useState} from "react";
import Image from "next/image";
import NavigationBar from "./NavigationBar";
import Link from 'next/link'

export default function Navbar() {
    
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
                        <li className="border-x border-GeneralBorder border-solid px-4 h-full flex items-center"><Link href="/">_hello</Link></li>
                        <li className="border-e border-GeneralBorder border-solid px-4 h-full flex items-center"><Link href="/About">_about-me</Link></li>
                        <li className="border-e border-GeneralBorder border-solid px-4 h-full flex items-center"><Link href="/Projects">_projects</Link></li>
                    </ul>
                    <div className="h-full">
                        <span className="border-s border-GeneralBorder border-solid ps-4 h-full flex items-center">_contact-me</span>
                    </div>
                </nav>
                <div className="flex IPhone:hidden cursor-pointer w-8">
                    <Image src="/NavbarIcon.svg" alt="NavbarOpenIcon" width={20} height={20} onClick={toggleShow} />
                </div>
            </div>
            <NavigationBar toggleShow={toggleShow} Show={Show}  />
        </header>
    )
}
