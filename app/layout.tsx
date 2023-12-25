import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'KTL WEB DEVELOPMENT',
  description: 'Knight The Lion (KTL) Web Development, based in the Triad, NC, specializes in crafting innovative and professional web solutions using Next.js, Tailwind CSS, and more. Explore our portfolio to witness our expertise firsthand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
      <div className='flex h-screen flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
      </div>
      </body>
      
    </html>
  )
}
