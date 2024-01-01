import Image from "next/image";

export default function Hello() {
    return (
        <div className="flex bg-MainBg w-full h-[77vh] gap-16 px-4 border border-GeneralBorder border-solid bg-BackgroundBlurs bg-no-repeat sm:bg-contain bg-cover  bg-[78%]">
            <div className="flex flex-col gap-20 flex-1 items-center  Tablet:items-end justify-center">
                <div>
                    <span className="text-[#E5E9F0]">Hi all. I am</span>
                    <h1 className="text-[#E5E9F0] text-6xl">Laeth Nueirat</h1>
                    <h2 className="text-GeneralBlue text-xl sm:text-3xl">&gt; Full Stack Developer</h2>
                </div>
                <div className="text-xs sm:text-lg">
                    <p className="text-GeneralGray">// I Love Coding 24/7</p>
                    <p className="text-GeneralGray">// find my profile on Github:</p>
                    <p className="flex gap-2">
                        <span className="text-GeneralBlue">const</span>
                        <span className="text-GeneralGreen">githubLink</span>
                        <span className="text-white">=</span>
                        <span className="text-LightOrange">"https://github.com/laeth0"</span>
                    </p>
                </div>
            </div>
            
            <div className="flex-1  hidden Tablet:flex select-none ">
                <Image className="rounded-xl0 " src="/MyPhoto.png" width={400} height={350} alt="SnakeGame" />
            </div>
        </div>
    )
}
