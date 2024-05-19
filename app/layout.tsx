import type { Metadata } from 'next'
import { Gabarito } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider';
import Navbar from '@/components/Navbar';

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kundan's Portfolio",
  description: 'Created By Kundan @techlism',
  openGraph: {
    title: "Kundan's Portfolio",
    description: 'Created By Kundan @techlism',
    images: ["/portfolio_og.webp"]
  },
  twitter: {
    site: 'https://portfolio.techlism.in',
    images: ["/portfolio_og.webp"],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
