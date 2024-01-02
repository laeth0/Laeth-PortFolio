import Image from 'next/image'
import CodeSpace from "@/app/components/CodeSpace";
import React from "react";

export default function About() {

    return (
        <div className="bg-MainBg w-full min-h-[77vh]  grid md:grid-cols-12 border border-GeneralBorder border-solid ">


            <div className="md:col-span-2 flex gap-2 flex-wrap">
                {/* Icons */}
                <div className="hidden Tablet:flex flex-col gap-4 p-2">
                    <Image src="/Terminal.svg" alt="Terminal" width="20" height="20"/>
                    <Image src="/personal-info-icon.svg" alt="Terminal" width="20" height="20"/>
                    <Image src="/hobbies-icon.svg" alt="Terminal" width="20" height="20"/>
                </div>
                {/* According */}
                <div className="border-x border-GeneralBorder border-solid flex-1 flex flex-col gap-0.5 text-lg md:text-xs xl:text-sm">
                    <details className="group">
                        <summary className="flex items-center bg-GeneralBorder gap-2 p-2 text-white cursor-pointer border-b border-GeneralBorder border-solid">
                            <Image src="/Triangle.svg" className="transition group-open:rotate-0 -rotate-90" alt="Triangle.svg" width="10" height="10"/>
                            <span>personal-info</span>
                        </summary>
                        <div className="my-3 group-open:animate-fadeIn ">
                            <div className="flex ps-2 gap-1">
                                <Image src="Arrow.svg" alt="Arrow.svg" height="10" width="10"/>
                                <Image src="/OrangeFile.svg" alt="OrangeFile.svg" height="15" width="15"/>
                                <span className="text-white">bio</span>
                            </div>
                            <div className="flex ps-2 gap-1">
                                <Image src="Arrow.svg" alt="Arrow.svg" height="10" width="10"/>
                                <Image src="/GreenFile.svg" alt="OrangeFile.svg" height="15" width="15"/>
                                <span>interests</span>
                            </div>
                            <div className="flex ps-2 gap-1">
                                <Image src="Arrow.svg" alt="Arrow.svg" height="10" width="10"/>
                                <Image src="/BlueFile.svg" alt="OrangeFile.svg" height="15" width="15"/>
                                <span>education</span>
                            </div>
                            <div className="flex ps-2 gap-1">
                                <Image src="Arrow.svg" className="invisible" alt="Arrow.svg" height="10" width="10"/>
                                <Image src="/Markdown.svg" alt="Markdown.svg" height="15" width="15"/>
                                <span>high-school</span>
                            </div>
                            <div className="flex ps-2 gap-1">
                                <Image src="Arrow.svg" className="invisible" alt="Arrow.svg" height="10" width="10"/>
                                <Image src="/Markdown.svg" alt="Markdown.svg" height="15" width="15"/>
                                <span>university</span>
                            </div>
                        </div>
                    </details>

                    <details className="group ">
                        <summary className="flex items-center gap-2 bg-GeneralBorder text-white cursor-pointer p-3 border-y border-GeneralBorder border-solid">
                            <Image src="/Triangle.svg" className="transition group-open:rotate-0 -rotate-90" alt="Triangle.svg" width="10" height="10"/>
                            <span>contacts</span>
                        </summary>
                        <div className="mt-3 group-open:animate-fadeIn flex flex-col gap-y-2 border-b md:border-none border-GeneralBorder border-solid">
                            <div className="flex gap-1 ps-2">
                                <Image src="/MailIcon.svg" alt="Triangle.svg" width="15" height="15"/>
                                <a className="hover:text-white duration-500 hover:scale-105" href="mailto:laethraed0@gmail.com">laethraed0</a>
                            </div>
                            <div className="flex gap-1 ps-2">
                                <Image src="/PhoneIcon.svg" alt="PhoneIcon.svg" width="15" height="15"/>
                                <a className="hover:text-white duration-500 hover:scale-105" href="tel:+97569768777">0569768777</a>
                            </div>
                        </div>
                    </details>
                </div>
            </div>

            <div className="flex flex-col md:col-span-10">
                {/* Upper */}
                <div className="border-b hidden md:flex border-GeneralBorder border-solid text-xs xl:text-sm">
                    <div className="flex gap-8 py-2 px-4 border-e w-fit h-full border-GeneralBorder border-solid">
                        <span>personal-info</span>
                        <Image src="/Close.svg" className="select-none" alt="Close" width="10" height="10"/>
                    </div>
                </div>

                {/* Lower */}
                <div className="flex gap-4 flex-1 flex-wrap">
                    {/* Left */}
                    <div className="flex flex-[1_1_400px] ps-4 text-lg border-e border-GeneralBorder border-solid">
                        
                        <CodeSpace
                            style={{background:"#011627",fontSize:".9rem"}}
                            language="js"
                            value={`/**
* About me
* My Name is Laeth
* I have 3 years of experience in web
* I am working in The Knowledge Academy
* I am studying at AAUP
* I learned Full-Stack Development
* I LOVE to code 24/7
*
* My Favourite language is C#
* Now I am Focusing On Web Development
* My goal is to be outstanding
*/`}
                        />
                           
                    </div>
                    
                    {/* Right */}
                    <div className="flex flex-col flex-[1_1_400px] gap-4 p-4 border-s border-GeneralBorder border-solid text-xs ">
                        <div className="text-sm">// Code snippet showcase:</div>
                        <div className="flex flex-col">
                            <div className="flex justify-between ">
                                <div className="flex gap-2">
                                    <Image src="/userImage.png" className="select-none h-3/4 w-auto" alt="user Image"
                                           width="36" height="36"/>
                                    <div className="flex flex-col">
                                        <span className="text-SecondaryBlue ">@Laeth0</span>
                                        <span>Created 5 months ago</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex gap-1 items-center">
                                        <Image src="/Comment.svg" className="select-none" alt="Comment.svg"
                                               width="15"
                                               height="15"/>
                                        <span className="hover:text-white duration-300">details</span>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Image src="/Star.svg" className="select-none" alt="Star.svg" width="15"
                                               height="15"/>
                                        <span className="hover:text-white duration-300">3 starts</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-CodeBg border border-GeneralBorder border-solid rounded-xl">
                                <CodeSpace
                                    style={{borderRadius:"0.75rem;",background:"#011221"}}
                                    language="js"
                                    value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}


                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <Image src="/userImage.png" className="select-none h-3/4 w-auto" alt="user Image"
                                           width="36" height="36"/>
                                    <div className="flex flex-col">
                                        <span className="text-SecondaryBlue ">@Laeth0</span>
                                        <span>Created 5 months ago</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-1 ">
                                        <Image src="/Comment.svg" className="select-none" alt="Comment.svg" width="15"
                                               height="15"/>
                                        <span className="hover:text-white duration-300">details</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <Image src="/Star.svg" className="select-none" alt="Star.svg" width="15"
                                               height="15"/>
                                        <span className="hover:text-white duration-300">3 starts</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bg-CodeBg border text-sm w-full border-GeneralBorder border-solid rounded-xl text-balance">
                                <CodeSpace
                                    style={{borderRadius:"0.75rem;",background:"#011221"}}
                                    language="js"
                                    value={`export function parseModelTuple(
response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);`}


                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

