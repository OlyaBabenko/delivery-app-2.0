'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/image/Yum-yum-delivery-purple.png';
import CartIcon from '@/assets/icon/cart.svg';
import UserIcon from '@/assets/icon/user.svg';
import { useCart } from '@/store/cart';
import useUser from '@/store/user';
import { getCookieByKey } from '@/utils/cookies';

const Header = () => {
   const cart = useCart();
   const count = cart?.length;
   const { getAccountInfo, personalInfo } = useUser();
   useEffect(() => {
      getAccountInfo();
   }, [getAccountInfo]);
   return (
      <div className='sticky left-0 top-0 z-10 flex h-16 w-full items-center gap-2 bg-white pr-2 shadow-md'>
         <Link href='/products' className='relative block h-full w-60'>
            <Image
               src={logo}
               alt={'logo'}
               sizes='240px'
               priority
               fill={true}
               className='object-cover'
            />
         </Link>
         <div className='space-x-3'>
            <Link href={'/'} className='text-primary-700'>
               Home
            </Link>
            <Link href={'/products'} className='text-primary-700'>
               Dishes
            </Link>
         </div>
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
         <Link
            href={getCookieByKey('access') ? '/account' : '/sign-in'}
            className={`block rounded-full ${personalInfo?.profile_picture ? 'relative h-10 w-10 p-0' : 'p-2 hover:bg-primary-100'}`}
         >
            {personalInfo?.profile_picture && (
               <Image
                  src={personalInfo?.profile_picture}
                  alt='profile_picture'
                  priority
                  sizes='100%'
                  fill={true}
                  className='rounded-full object-cover shadow-lg'
               />
            )}
            {!personalInfo?.profile_picture && <UserIcon className='h-6 w-6 text-primary' />}
         </Link>
      </div>
   );
};

export default Header;
