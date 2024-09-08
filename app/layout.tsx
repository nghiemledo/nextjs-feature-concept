import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/global.css';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

const geistSans = localFont({
   src: './fonts/GeistVF.woff',
   variable: '--font-geist-sans',
   weight: '100 900',
});
const geistMono = localFont({
   src: './fonts/GeistMonoVF.woff',
   variable: '--font-geist-mono',
   weight: '100 900',
});

export const metadata: Metadata = {
   title: 'Nghiem Le Do | Home page',
   description: 'Day la trang web day hoc truc tuyen',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
