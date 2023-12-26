import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex justify-between bg-MainBg rounded-b-xl border border-GeneralBorder border-solid">
            <div className="flex">
                <span className="py-2 px-4">find me in:</span>
                <span className="h-full flex items-center px-2 border-x border-solid border-GeneralBorder">
                    <Image src="/twitter.svg" alt="twitter" width="20" height="20"/>
                </span>
                <span className="h-full flex items-center px-2 border-e border-solid border-GeneralBorder">
                    <Image src="/facebook.svg" alt="facebook" width="20" height="20"/>
                </span>
            </div>
            <div className="flex gap-1 items-center px-4 border-s border-solid border-GeneralBorder">
                <span>Laeth0</span>
                <Image src="/github.svg" alt="github" width="20" height="20"/>
            </div>
        </footer>
    )
}