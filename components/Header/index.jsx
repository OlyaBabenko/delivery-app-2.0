'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useCart from '@/store/cart';
import logo from '@/assets/image/Yum-yum-delivery-purple.png';
import CartIcon from '@/assets/icon/cart.svg';
import UserIcon from '@/assets/icon/user.svg';

const Header = () => {
   const { cart } = useCart();
   const count = cart?.length;

   return (
      <div className='sticky left-0 top-0 z-10 flex h-16 w-full items-center gap-2 bg-white pr-2 shadow-md'>
         <Link href='/' className='relative block h-full w-60'>
            <Image
               src={logo}
               alt={'logo'}
               sizes='240px'
               priority
               fill={true}
               style={{ objectFit: 'cover' }}
            />
         </Link>
         <Link
            href='/cart'
            className='relative ml-auto block rounded-full p-2 hover:bg-primary-100'
         >
            <CartIcon className='h-6 w-6 text-primary' />
            {count > 0 && (
               <span className='absolute right-0 top-0 block h-4 w-4 rounded-full bg-primary-400 text-center text-xs text-white'>
                  {count}
               </span>
            )}
         </Link>
         <Link href={'/account'} className='block rounded-full p-2 hover:bg-primary-100'>
            <UserIcon className='h-6 w-6 text-primary' />
         </Link>
      </div>
   );
};

export default Header;
