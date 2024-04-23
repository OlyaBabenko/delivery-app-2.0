"use client";

import React, { useState } from "react";
import logo from "@/assets/image/Yum-yum-delivery-purple.png";
import Link from "next/link";
// import ModalAuthorization from "./ModalAuthorization/ModalAuthorization";
import useCart from "@/store/cart";
import useUser from "@/store/user";
import Image from "next/image";
import CartIcon from '@/assets/icon/cart.svg'
import UserIcon from '@/assets/icon/user.svg'

const Header = () => {
    const { userInfo } = useUser();
    const { cart } = useCart();
    const count = cart?.length;
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='sticky top-0 left-0 pr-2 h-16 flex gap-2 items-center'>
            <Link href="/" className='relative block w-60 h-full'>
                <Image src={logo} alt={'logo'} fill={true} style={{ objectFit: "cover" }} />
            </Link>
            <Link href="/cart" className="block ml-auto p-2 rounded-full hover:bg-primary-100">
                <CartIcon className='w-5 h-5 text-primary' />
                {count > 0 && <div className=''>{count}</div>}
            </Link>
            {userInfo 
                ? <Link href="/profile" className="block p-2 rounded-full hover:bg-primary-100">
                    <UserIcon className='w-5 h-5 text-primary' />
                  </Link> 
                : <button className="p-2 rounded-full hover:bg-primary-100">
                    <UserIcon className='w-5 h-5 text-primary' />
                  </button>
            }
            {/* <ModalAuthorization setRegister={setIsRegisterUser} active={modalActive} setActive={setModalActive}/> */}
        </div>
    )
}

export default Header;