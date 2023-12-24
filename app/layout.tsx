import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import {NextFont} from "next/dist/compiled/@next/font";
import React from "react";

const GeneralFont:NextFont = Fira_Code({
  weight: ["300","400","500","600","700"],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laeth Nueirat',
  description: 'This is my personal website',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={GeneralFont.className}>{children}</body>
    </html>
  )
}
