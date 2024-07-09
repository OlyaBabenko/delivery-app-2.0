import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'Yum yum delivery',
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <div className='relative grid min-h-screen w-full grid-rows-[4rem_auto]'>
               <Header />
               <div className='bg-primary-100/50'>{children}</div>
               {/* <Footer /> */}
            </div>
            <Toaster toastOptions={{ duration: 3000 }} richColors />
         </body>
      </html>
   );
}
