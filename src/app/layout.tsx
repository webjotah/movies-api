import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MyContextProvider } from '@/context/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Api Teste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
