import type {Metadata} from 'next'
import {Fira_Code} from 'next/font/google'
import './globals.css'
import {NextFont} from "next/dist/compiled/@next/font";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const GeneralFont: NextFont = Fira_Code({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Laeth Nueirat',
    description: 'This is my personal website',
    icons: {
        icon: "./favicon.ico",
        apple: "./favicon.ico",
    },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${GeneralFont.className} bg-bodyBg p-[2%] text-GeneralGray`}>
                <Navbar/>
                <main>
                   {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}
