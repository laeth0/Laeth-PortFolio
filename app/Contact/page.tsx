"use client"
import Image from "next/image";
import CodeSpace from "@/app/components/CodeSpace";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [Data, setData] = useState<{ Name: string, Email: string, Message: string }>({ Name: "", Email: "", Message: "" });
    const [isEmailSending, setIsEmailSending] = useState<Boolean>(false)
    const date = new Date(Date.now());
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    });


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7yzlyk7', 'template_6qijato', form.current, 'MKVFoNVXTu5kMO3kK')
            .then(result => {
                console.log(result.text);
                setData({ Name: "", Email: "", Message: "" })
                e.target.reset(); // this statement will reset the form after successfull submission
                setIsEmailSending(true)
            }, error => {
                console.log(error.text)
            });
    };
    // to_name
    return (
        <div className="bg-MainBg w-full min-h-[77vh]  grid md:grid-cols-12 border border-GeneralBorder border-solid ">
            {/* According */}
            <div className="md:col-span-2 flex gap-2 flex-wrap">
                <div className="border-x border-GeneralBorder border-solid flex-1 flex flex-col gap-0.5 text-lg md:text-xs xl:text-sm">
                    <details className="group">
                        <summary className="flex items-center bg-GeneralBorder gap-2 p-2 text-white cursor-pointer border-b border-GeneralBorder border-solid">
                            <Image src="/Triangle.svg" loading={"lazy"} className="transition group-open:rotate-0 -rotate-90" alt="Triangle.svg" width="10" height="10" />
                            <span>contacts</span>
                        </summary>
                        <div className="my-3 group-open:animate-fadeIn flex flex-col gap-2 ">
                            <div className="flex gap-1 ps-2">
                                <Image src="/MailIcon.svg" loading={"lazy"} alt="Triangle.svg" width="15" height="15" />
                                <a className="hover:text-white duration-500 hover:scale-105" href="mailto:laethraed0@gmail.com">laethraed0@gmail.com</a>
                            </div>
                            <div className="flex gap-1 ps-2">
                                <Image src="/PhoneIcon.svg" loading={"lazy"} alt="PhoneIcon.svg" width="15" height="15" />
                                <a className="hover:text-white duration-500 hover:scale-105" href="tel:+97569768777">+972569768777</a>
                            </div>
                        </div>
                    </details>

                    <details className="group">
                        <summary className="flex items-center gap-2 bg-GeneralBorder text-white cursor-pointer p-3 border-y border-GeneralBorder border-solid">
                            <Image src="/Triangle.svg" loading={"lazy"} className="transition group-open:rotate-0 -rotate-90" alt="Triangle.svg" width="10" height="10" />
                            <span>find-me-also-in</span>
                        </summary>
                        <div className="mt-3 group-open:animate-fadeIn flex flex-col gap-y-2 border-b md:border-none border-GeneralBorder border-solid">
                            <div className="flex gap-2 ps-2 ">
                                <Image src="/VectorIcon.svg" loading={"lazy"} alt="PhoneIcon.svg" width="15" height="15" />
                                <a className="hover:text-white duration-500 hover:scale-105" target="_blank " href="https://www.facebook.com/laeth.raed.52/">FaceBook</a>
                            </div>
                            <div className="flex gap-2 ps-2 ">
                                <Image src="/VectorIcon.svg" loading={"lazy"} alt="PhoneIcon.svg" width="15" height="15" />
                                <a className="hover:text-white duration-500 hover:scale-105" target="_blank " href="https://www.linkedin.com/in/laethnueirat/">Linkedin</a>
                            </div>
                            <div className="flex gap-2 ps-2 ">
                                <Image src="/VectorIcon.svg" loading={"lazy"} alt="PhoneIcon.svg" width="15" height="15" />
                                <a className="hover:text-white duration-500 hover:scale-105" target="_blank " href="wa.me/972569768777">Whatsapp</a>
                            </div>
                            <div className="flex gap-2 ps-2 ">
                                <Image src="/VectorIcon.svg" loading={"lazy"} alt="PhoneIcon.svg" width="15" height="15" />
                                <a className="hover:text-white duration-500 hover:scale-105" target="_blank " href="https://linktr.ee/LaethNueirat">Linktree</a>
                            </div>
                            <div className="flex gap-2 ps-2 ">
                                <Image src="/VectorIcon.svg" loading={"lazy"} alt="PhoneIcon.svg" width="15" height="15" />
                                <a className="hover:text-white duration-500 hover:scale-105" target="_blank " href="https://github.com/laeth0">GitHub</a>
                            </div>

                        </div>
                    </details>
                </div>
            </div>
            <div className="flex flex-col md:col-span-10">
                {/* Upper */}
                <div className="border-b hidden md:flex border-GeneralBorder border-solid text-xs xl:text-sm">
                    <div className="flex gap-8 py-2 px-4 border-e w-fit h-full border-GeneralBorder border-solid">
                        <span>contacts</span>
                        <Image src="/Close.svg" loading={"lazy"} className="select-none" alt="Close" width="10" height="10" />
                    </div>
                </div>
                {/* Lower */}
                <div className="flex flex-1 flex-wrap">

                    {/* Left */}
                    <div className={`flex flex-col ${isEmailSending ? "justify-center items-center" : ""}  flex-[1_1_400px] border-e border-GeneralBorder border-solid text-xs `}>
                        {
                            isEmailSending ?
                                <div className="w-1/2 gap-4 flex flex-col  pt-4 ">
                                    <h2 className="text-white text-center text-[clamp(1.2rem,2.5vw,2rem)]" >Thank you! 🤘</h2>
                                    <p className="text-balance text-center">Your message has been accepted. You will recieve answer really soon!</p>
                                    <button className="text-white bg-ButtonBg w-fit p-2 rounded cursor-pointer mx-auto" onClick={() => setIsEmailSending(false)}>send-new-message</button>
                                </div> :
                                <form ref={form} onSubmit={sendEmail} className="px-[15%] pt-4 flex flex-col gap-6">
                                    <div className="flex flex-col gap-3 ">
                                        <label htmlFor="Name"  > _name:</label>
                                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...Data, Name: e.target.value })} name="from_name" type="text" id="Name" className="rounded p-2 focus-visible:outline-0 bg-CodeBg border border-solid border-GeneralGray focus-visible:shadow-[0px_0px_10px_7px_rgba(96,123,150,0.30)]" required />
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <label htmlFor="Email" >_email:</label>
                                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...Data, Email: e.target.value })} type="email" id="Email" name="from_email" className="rounded p-2 focus-visible:outline-0 bg-CodeBg border border-solid border-GeneralGray focus-visible:shadow-[0px_0px_10px_7px_rgba(96,123,150,0.30)]" required />
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <label htmlFor="Message" >_message:</label>
                                        <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData({ ...Data, Message: e.target.value })} id="Message" rows={7} name="message" className="rounded bg-CodeBg focus-visible:outline-0 p-2 border border-solid border-GeneralGray focus-visible:shadow-[0px_0px_10px_7px_rgba(96,123,150,0.30)]" required ></textarea>
                                    </div>
                                    <input className="text-white bg-ButtonBg w-fit p-2 rounded cursor-pointer" type="submit" value="submit-message" />
                                </form>
                        }

                    </div>
                    {/* Right */}
                    <div className="flex flex-[1_1_400px] justify-center text-lg border-s border-GeneralBorder border-solid">

                        <CodeSpace
                            style={{ background: "#011627", fontSize: ".9rem" }}
                            language="js"
                            value={`const button = document.querySelector('#sendBtn');

const message = {
name: "${Data.Name}",
email: "${Data.Email}",
message: "${Data.Message}",
date: "${formattedDate}"
}

button.addEventListener('click', () => {
form.send(message);
})`}
                        />

                    </div>
                </div>
            </div>
        </div>

    )
}