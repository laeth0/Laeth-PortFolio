import Image from 'next/image'

export default function About() {

    return (
        <div className="bg-MainBg w-full min-h-[77vh] flex border border-GeneralBorder border-solid flex-wrap">


            {/* Icons */}
            <div className=" flex flex-grow Tablet:flex-grow-0 Tablet:flex-col flex-wrap Tablet:flex-nowrap gap-4 border border-GeneralBorder border-solid p-4 ">
                <div className="flex gap-2">
                    <input type="checkbox" id="React" className="mix-blend-soft-light peer/React" defaultChecked/>
                    <Image src="/ReactIcon.svg" loading={"lazy"} alt="ReactIcon" width="20" height="20"/>
                    <label htmlFor="React" className="peer-checked/React:text-white duration-300">React</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id="HTML" className="mix-blend-soft-light peer/HTML"/>
                    <Image src="/HTMLIcon.svg" loading={"lazy"} alt="HTMLIcon" width="20" height="20"/>
                    <label htmlFor="HTML" className="peer-checked/HTML:text-white duration-300">HTML</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id="CSS" className="mix-blend-soft-light peer/CSS"/>
                    <Image src="/CssIcon.svg" loading={"lazy"} alt="CSSIcon" width="20" height="20"/>
                    <label htmlFor="CSS" className="peer-checked/CSS:text-white duration-300">CSS</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id="Vue" className="mix-blend-soft-light peer/Vue" defaultChecked/>
                    <Image src="/VueIcon.svg" loading={"lazy"} alt="VueIcon" width="20" height="20"/>
                    <label htmlFor="Vue" className="peer-checked/Vue:text-white duration-300">Vue</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id="Angular" className="mix-blend-soft-light peer/Angular"/>
                    <Image src="/AngularIcon.svg" loading={"lazy"} alt="AngularIcon" width="20" height="20"/>
                    <label htmlFor="Angular" className="peer-checked/Angular:text-white duration-300">Angular</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id="Gatsby" className="mix-blend-soft-light peer/Gatsby"/>
                    <Image src="/GatsbyIcon.svg" loading={"lazy"} alt="GatsbyIcon" width="20" height="20"/>
                    <label htmlFor="Gatsby" className="peer-checked/Gatsby:text-white duration-300">Gatsby</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id="Flutter" className="mix-blend-soft-light peer/Flutter"/>
                    <Image src="/FlutterIcon.svg" loading={"lazy"} alt="FlutterIcon" width="20" height="20"/>
                    <label htmlFor="Flutter" className="peer-checked/Flutter:text-white duration-300">Flutter</label>
                </div>
            </div>

            {/*Content*/}
            <div className="flex flex-col flex-[1_1_490px]">
                {/* Upper */}
                <div className="border-b hidden md:flex border-GeneralBorder border-solid text-xs xl:text-sm">
                    <div className="flex gap-8 py-2 px-4 border-e w-fit h-full border-GeneralBorder border-solid">
                        <span>NextJS</span>
                        <Image src="/Close.svg" loading={"lazy"} className="select-none" alt="Close" width="10" height="10"/>
                    </div>
                </div>

                {/* Lower */}
                <div className="flex gap-8 flex-1 flex-wrap py-6 px-[5%]">
                    {/*knowledgeAcademy*/}
                    <div className="flex-[1_1_300px] flex flex-col gap-2">
                        <h2 className="text-SecondaryBlue ps-4">Knowledge Academy</h2>
                        <div className="bg-CodeBg rounded-3xl relative flex-1 flex flex-col justify-between hover:shadow-[0px_0px_20px_6px_rgba(200,208,216,0.46)] duration-500">
                            <span className="absolute top-3 right-4 p-1 rounded bg-[#86E1F9]" >
                                <Image src="/ReactIcon.svg" loading={"lazy"} alt="ReactIcon" width="20" height="20"/>
                            </span>
                            <Image src="/knowledgeAcademy.png" loading={"lazy"} className="select-none w-full rounded-t-2xl" alt="TMDB" width="500" height="500"/>
                            <div className="p-4 flex flex-col gap-2">
                                <p className="text-balance">Duis aute irure dolor in velit esse cillum dolore.</p>
                                <a href="https://laeth0.github.io/knowledge-Academy/" className="bg-ButtonBg p-3 rounded w-fit" target="_blank">view-project</a>
                            </div>
                        </div>
                    </div>
                    {/*BestEats*/}
                    <div className="flex-[1_1_300px]  flex flex-col gap-2">
                        <h2 className="text-SecondaryBlue ps-4">Best Eats</h2>
                        <div className="bg-CodeBg rounded-3xl relative flex-1 flex flex-col justify-between hover:shadow-[0px_0px_20px_6px_rgba(200,208,216,0.46)] duration-500">
                            <span className="absolute top-3 right-4 p-1 rounded bg-[#86E1F9]" >
                                <Image src="/ReactIcon.svg" loading={"lazy"} alt="ReactIcon" width="20" height="20"/>
                             </span>
                            <Image src="/BestEats.png" loading={"lazy"} className="select-none w-full rounded-t-2xl" alt="TMDB" width="500"  height="500"/>
                            <div className="p-4 flex flex-col gap-2">
                                <p className="text-balance">Duis aute irure dolor in velit esse cillum dolore.</p>
                                <a href="https://laeth0.github.io/Best-Eats/" className="bg-ButtonBg p-3 rounded w-fit" target="_blank">view-project</a>
                            </div>
                        </div>
                    </div>
                    {/*portfolio*/}
                    <div className="flex-[1_1_300px]  flex flex-col gap-2">
                        <h2 className="text-SecondaryBlue ps-4">ProtFolio Theme</h2>
                        <div className="bg-CodeBg rounded-3xl relative flex-1 flex flex-col justify-between hover:shadow-[0px_0px_20px_6px_rgba(200,208,216,0.46)] duration-500">
                            <span className="absolute top-3 right-4 p-1 rounded bg-[#86E1F9]" >
                                <Image src="/ReactIcon.svg" loading={"lazy"} alt="ReactIcon" width="20" height="20"/>
                             </span>
                            <Image src="/portfolio.png" loading={"lazy"} className="select-none w-full rounded-t-2xl" alt="TMDB" width="500" height="500"/>
                            <div className="p-4 flex flex-col gap-2">
                                <p className="text-balance">Duis aute irure dolor in velit esse cillum dolore.</p>
                                <a href="https://laeth0.github.io/PFolio/" className="bg-ButtonBg p-3 rounded w-fit" target="_blank">view-project</a>
                            </div>
                        </div>
                    </div>
                    {/*TMDB*/}
                    <div className="flex-[1_1_300px]  flex flex-col gap-2">
                        <h2 className="text-SecondaryBlue ps-4">The Movie Database(TMDB)</h2>
                        <div className="bg-CodeBg rounded-3xl relative flex-1 flex flex-col justify-between hover:shadow-[0px_0px_20px_6px_rgba(200,208,216,0.46)] duration-500">
                            <span className="absolute top-3 right-4 p-1 rounded bg-[#86E1F9]" >
                                <Image src="/ReactIcon.svg" loading={"lazy"} alt="ReactIcon" width="20" height="20"/>
                             </span>
                            <Image src="/TMDB.png" loading={"lazy"} className="select-none w-full rounded-t-2xl" alt="TMDB" width="500" height="500"/>
                            <div className="p-4 flex flex-col gap-2">
                                <p className="text-balance">Duis aute irure dolor in velit esse cillum dolore.</p>
                                <a href="https://tmdb-laeth0.vercel.app/" className="bg-ButtonBg p-3 rounded w-fit" target="_blank">view-project</a>
                            </div>
                        </div>
                    </div>
                    {/*avada*/}
                    <div className="flex-[1_1_300px]  flex flex-col gap-2">
                        <h2 className="text-SecondaryBlue ps-4">Avada</h2>
                        <div className="bg-CodeBg rounded-3xl relative flex-1 flex flex-col justify-between hover:shadow-[0px_0px_20px_6px_rgba(200,208,216,0.46)] duration-500">
                            <span className="absolute top-3 right-4 p-1 rounded bg-[#86E1F9]" >
                                <Image src="/ReactIcon.svg" loading={"lazy"} alt="ReactIcon" width="20" height="20"/>
                             </span>
                            <Image src="/avada.png" loading={"lazy"} className="select-none w-full rounded-t-2xl" alt="TMDB" width="500" height="500"/>
                            <div className="p-4 flex flex-col gap-2">
                                <p className="text-balance">Duis aute irure dolor in velit esse cillum dolore.</p>
                                <a href="https://laeth0.github.io/Avada/" className="bg-ButtonBg p-3 rounded w-fit" target="_blank">view-project</a>
                            </div>
                        </div>
                    </div>
                    {/*instagram*/}
                    <div className="flex-[1_1_300px]  flex flex-col gap-2">
                        <h2 className="text-SecondaryBlue ps-4">Instagram</h2>
                        <div className="bg-CodeBg rounded-3xl relative flex-1 flex flex-col justify-between hover:shadow-[0px_0px_20px_6px_rgba(200,208,216,0.46)] duration-500">
                            <span className="absolute top-3 right-4 p-1 rounded bg-[#86E1F9]" >
                                <Image src="/ReactIcon.svg" loading={"lazy"} alt="ReactIcon" width="20" height="20"/>
                             </span>
                            <Image src="/instagram.png" loading={"lazy"} className="select-none w-full rounded-t-2xl" alt="TMDB" width="500" height="500"/>
                            <div className="p-4 flex flex-col gap-2">
                                <p className="text-balance">Duis aute irure dolor in velit esse cillum dolore.</p>
                                <a href="https://github.com/laeth0/instagram-clone"  className="bg-ButtonBg p-3 rounded w-fit" target="_blank">view-project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

