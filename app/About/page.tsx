
import Image from 'next/image'
const Numbers:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
export default function About() {
  
    return (
        <div className="bg-MainBg w-full h-[77vh] flex border border-GeneralBorder border-solid">
            <div className="flex flex-col gap-4 p-4">
                <Image src="/Terminal.svg" alt="Terminal" width="20" height="20" />
                <Image src="/personal-info-icon.svg" alt="Terminal" width="20" height="20" />
                <Image src="/hobbies-icon.svg" alt="Terminal" width="20" height="20" />
            </div>
            
            <div className="flex flex-col"></div>
            
            <div className="flex flex-col">
                <div className="flex gap-8 p-2 border-e border-GeneralBorder border-solid">
                    <span>personal-info</span>
                    <Image src="/Close.svg" className="select-none" alt="Close" width="10" height="10"  />
                </div>
                
                <div className="flex flex-wrap gap-4">
                    
                    <div className="flex flex-[1_1_500px] gap-2">
                        <div className="flex flex-col">{Numbers.map( number =><span>{number}</span> )}</div>
                        <div className="">
                            /**
                            * About me
                            * My Name is Laeth
                            * I have 3 years of experience in web
                            * I am working in Knowledge Academy
                            * I am studying at AAUP
                            * I learned Full-Stack Development
                            * I LOVE to code 24/7
                            *
                            * My Favourite language is C#
                            * Now I Focusing On Competitive Programming
                            * My goal is to be outstanding
                            */
                        </div>
                    </div>
                    <div className="flex flex-col flex-[1_1_500px] gap-6">
                        <div className="text-xl">// Code snippet showcase:</div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <Image src="/userImage.png" className="select-none w-auto" alt="user Image" width="36" height="36"  />
                                    <div className="flex flex-col">
                                        <span className="text-SecondaryBlue">@Laeth0</span>
                                        <span>Created 5 months ago</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex gap-1 items-center">
                                        <Image src="/Comment.svg" className="select-none" alt="Comment.svg" width="15" height="15"  />
                                        <span>details</span>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Image src="/Star.svg" className="select-none" alt="Star.svg" width="15" height="15"  />
                                        <span>3 starts</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-CodeBg p-6 border border-GeneralBorder border-solid rounded-xl ">
                                {`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
                                const value: T = parseModel(chunk._response, chunk._value);
                                const initializedChunk: InitializedChunk<T> = (chunk: any);
                                initializedChunk._status = INITIALIZED;
                                initializedChunk._value = value;
                                return value;
                            }`}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <Image src="/userImage.png" className="select-none w-auto" alt="user Image" width="36" height="36"  />
                                    <div className="flex flex-col">
                                        <span className="text-SecondaryBlue">@Laeth0</span>
                                        <span>Created 5 months ago</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-1">
                                        <Image src="/Comment.svg" className="select-none" alt="Comment.svg" width="15" height="15"  />
                                        <span>details</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <Image src="/Star.svg" className="select-none" alt="Star.svg" width="15" height="15"  />
                                        <span>3 starts</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-CodeBg p-6 border border-GeneralBorder border-solid rounded-xl">
                                {`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
                                const value: T = parseModel(chunk._response, chunk._value);
                                const initializedChunk: InitializedChunk<T> = (chunk: any);
                                initializedChunk._status = INITIALIZED;
                                initializedChunk._value = value;
                                return value;
                            }`}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

