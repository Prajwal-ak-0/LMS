import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { initialProfile } from '../lib/setInitialProfile'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EduHub',
  description: 'Generated by EduHub',
}

export default async function RootLayout({ children }) {
 
  const profile = await initialProfile();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <main className='dark text-foreground bg-background'>
          <ClerkProvider>
              {children}
          </ClerkProvider>
        </main>
      </body>
    </html>
  )
}
