import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi blog',
  description: 'Mi blog creado con next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        </body>
    </html>
  )
}
