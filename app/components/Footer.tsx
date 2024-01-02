import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex justify-between bg-MainBg rounded-b-xl border border-GeneralBorder border-solid select-none">
            <div className="flex">
                <span className="py-2 px-4">find me in:</span>
                <span className="h-full flex items-center px-2 border-x border-solid border-GeneralBorder">
                    <a href="https://www.linkedin.com/in/laethnueirat/" target="_blank">
                        <Image src="/twitter.svg" alt="twitter" width="20" height="20"/>
                    </a>
                </span>
                <span className="h-full flex items-center px-2 border-e border-solid border-GeneralBorder">
                    <a href="https://www.facebook.com/laeth.raed.52"  target="_blank">
                        <Image src="/facebook.svg" alt="facebook" width="20" height="20"/>
                    </a>
                </span>
            </div>
            <a href="https://github.com/laeth0" className="flex gap-1 items-center px-4 border-s border-solid border-GeneralBorder"  target="_blank">
                <span>@Laeth0</span>
                <Image src="/github.svg" alt="github" width="20" height="20"/>
            </a>
        </footer>
    )
}