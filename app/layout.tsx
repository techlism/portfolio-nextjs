import type { Metadata } from 'next'
import { Inter, Montserrat, Roboto, Salsa, Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kundan's Portfolio",
  description: 'Created By Kundan @techlism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
