import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import Navbar from './components/Navbar'

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '300'],
  variable: '--font-IBM_Plex_sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm_plex_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
