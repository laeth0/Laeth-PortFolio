import Link from 'next/link'


export default function BigNavigation({ pathname }: { pathname : string}) {
    return (
        <nav className=" justify-between IPhone:flex hidden flex-1 items-center">
            <ul className="flex h-full">
                <li className={`border-x border-GeneralBorder border-solid px-4 h-full flex items-center ${pathname === '/' ? 'text-white border-b-4 border-b-GeneralOrange' : ''}`}><Link href="/">_hello</Link></li>
                <li className={`border-e border-GeneralBorder border-solid px-4 h-full flex items-center ${pathname === '/About' ? 'text-white border-b-4 border-b-GeneralOrange' : ''}`}><Link href="/About">_about-me</Link></li>
                <li className={`border-e border-GeneralBorder border-solid px-4 h-full flex items-center ${pathname === '/Projects' ? 'text-white border-b-4 border-b-GeneralOrange' : ''}`}><Link href="/Projects">_projects</Link></li>
            </ul>
            <div className="h-full">
                <span className={`border-s border-GeneralBorder border-solid px-4 h-full flex items-center ${pathname === '/Contact' ? 'text-white border-b-4 border-b-GeneralOrange' : ''}`}><Link href="/Contact">_contact-me</Link></span>
            </div>
        </nav>
    )
}
