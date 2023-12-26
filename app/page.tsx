import Image from "next/image";

export default function Hello() {
    return (
        <div className="flex bg-MainBg w-full py-20 gap-16 relative ">
            <Image className="fixed right-[7%] top-[5%] w-1/2" src="/BackgroundBlurs.png" alt="BackgroundBlurs" width="650" height="650" />
            <div className="flex flex-col gap-20 flex-1 items-end">
                <div>
                    <span className="text-[#E5E9F0]">Hi all. I am</span>
                    <h1 className="text-[#E5E9F0] text-6xl">Laeth Nueirat</h1>
                    <h2 className="text-GeneralBlue text-3xl">&gt; Front-end developer</h2>
                </div>
                <div>
                    <p className="text-GeneralGray">// complete the game to continue</p>
                    <p className="text-GeneralGray">// you can also see it on my Github page</p>
                    <p className="flex gap-2">
                        <span className="text-GeneralBlue">const</span>
                        <span className="text-GeneralGreen">githubLink</span>
                        <span className="text-white">=</span>
                        <span className="text-LightOrange">"https://github.com/laeth0"</span>
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <Image src="/SnakeGame.png" width={400} height={400} alt="SnakeGame" />
            </div>
        </div>
    )
}
