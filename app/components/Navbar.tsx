"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import debounce from "lodash.debounce";
const SmallNavigationBar = dynamic(() => import('./SmallNavigationBar'));
const BigNavigation = dynamic(() => import('./BigNavigation'));


export default function Navbar() {
    const pathname = usePathname()
    const [Show, setShow] = useState<boolean>(false)
    const toggleShow = () => setShow(!Show)
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 666);
        const bouncedReques = debounce(handleResize, 300);
        window.addEventListener('resize', bouncedReques);
        handleResize();
        return () => window.removeEventListener('resize', bouncedReques);
    }, []);

    return (
        <header className="bg-MainBg rounded-t-xl border border-GeneralBorder border-solid select-none">
            <div className="flex justify-between ">
                <div className="pe-[7.5%] flex items-center">
                    <span className="py-4 ps-5"><Link href="/">Laeth Nueirat</Link></span>
                </div>
                {isSmallScreen ? null : <BigNavigation pathname={pathname} />}
                <div className="flex IPhone:hidden cursor-pointer w-8">
                    <Image src="/NavbarIcon.svg" alt="NavbarOpenIcon" loading={"lazy"} width={20} height={20} onClick={toggleShow} />
                </div>
            </div>
            {isSmallScreen ? <SmallNavigationBar toggleShow={toggleShow} Show={Show} pathname={pathname} /> : null}
        </header>
    )
}
