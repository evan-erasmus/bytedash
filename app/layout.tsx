import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {MainMenu} from "@/app/components/MainMenu";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ByteDash',
  description: 'Efficiency in Every Byte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen w-full flex-col items-center justify-space-start pt-2.5 pr-24 pb-24 pl-24">
        <MainMenu>
        </MainMenu>
        {children}
      </main>

      </body>
    </html>
  )
}
