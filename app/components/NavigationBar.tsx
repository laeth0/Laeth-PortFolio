"use client"
import Image from "next/image";
import Link from "next/link";

export default function NavbarIcon({toggleShow, Show}: { toggleShow: () => void, Show: boolean }) {

    return (
        <div className={`fixed ${Show? "scale-100":"scale-0"} inset-0 z-10 bg-MainBg justify-start items-center flex-col duration-700 flex p-4`}>
            <div className="flex justify-between w-full border-b py-4 border-GeneralBorder border-solid">
                <Link href="/">Laeth Nueirat</Link>
                <Image src="/Close.svg" alt="NavbarCloseicon" className="cursor-pointer" width={20} height={20} onClick={toggleShow} />
            </div>
            <div className="py-4 w-full text-white border-b border-GeneralBorder border-solid"><Link href="/">_hello</Link></div>
            <div className="py-4 w-full text-white border-b border-GeneralBorder border-solid"><Link href="/About">_about-me</Link></div>
            <div className="py-4 w-full text-white border-b border-GeneralBorder border-solid"><Link href="/Projects">_projects</Link></div>
            <div className="py-4 w-full text-white border-b border-GeneralBorder border-solid"><Link href="/Contact">_contact-me</Link></div>
        </div>
    )
}