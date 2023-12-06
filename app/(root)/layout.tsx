import type { Metadata } from 'next'
import { Inter } from "next/font/google"

import "../globals.css"
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
}

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          
          <main>
            <LeftSidebar />
            
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            
            </section>
            
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
