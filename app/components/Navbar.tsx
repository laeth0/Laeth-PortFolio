export default function Navbar() {
    return (
        <header className="bg-MainBg grid grid-cols-12 rounded-t-xl border border-GeneralBorder border-solid">
            <div className="col-span-2 px-4 flex items-center">
                <span>Laeth Nueirat</span>
            </div>
            <nav className="col-span-10 justify-between flex items-center">
                <ul className="flex h-full">
                    <li className="border-x border-GeneralBorder border-solid px-4 h-full flex items-center">_hello</li>
                    <li className="border-e border-GeneralBorder border-solid px-4 h-full flex items-center">_about-me</li>
                    <li className="border-e border-GeneralBorder border-solid px-4 h-full flex items-center">_projects</li>
                </ul>
                <div className="h-full">
                    <span className="border-s border-GeneralBorder border-solid px-4 h-full flex items-center py-4">_contact-me</span>
                </div>
            </nav>
        </header>
    )
}