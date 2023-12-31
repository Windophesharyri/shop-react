import cl from './ProfileLoggined.module.css';

import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrDocument } from 'react-icons/gr'
import { ImExit } from 'react-icons/im'

import Login from '../Login/Login';

import { useState } from 'react';

function ProfileLoggined( {state} ) {
    const [showLogin, setShowLogin] = useState(false)
    const onClickLogin = () => { setShowLogin(current => !current) }

    const onClickLogout = () => { 
        localStorage.setItem('authoritorized', false) 
        state(current => !current)
    }

    const cart = () => {
        window.location.href = '/cart'
        state(current => !current)
    }

  return (
    <div className = {cl.root}>
        <div className = {cl.inner}>
            <div className = {cl.header}>
                <div className = {cl.profileIcon}></div>
                <p className = {cl.nickName}>Example</p>
            </div>
            <div className = {cl.cart} onClick = {cart}>
                <AiOutlineShopping className = {cl.icons} />
                <p className = {cl.cartP}>Корзина</p>
            </div>
            <div className = {cl.favourite}>
                <AiOutlineHeart className = {cl.icons} />
                <p className = {cl.cartP}>Избранное</p>
            </div>
            <div className = {cl.watched}>
                <AiOutlineEye className = {cl.icons} />
                <p className = {cl.cartP}>Просмотренные</p>
            </div>      
            <div className = {cl.bonuses}>
                <svg className = {cl.icons} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                    <path d="M14.7223 2.26666C12.6501 2.26666 10.5557 3 10.5557 4.39444V5.27777C10.9278 5.29492 11.2987 5.33201 11.6668 5.38889V4.39444C11.6668 4.03333 12.8279 3.37222 14.7223 3.37222C16.6168 3.37222 17.7779 4.03888 17.7779 4.39444V10.1333C17.7779 10.4333 16.9668 10.9333 15.6112 11.0944V12.2056C17.3501 12.0278 18.889 11.3167 18.889 10.1222V4.39444C18.889 3 16.7946 2.26666 14.7223 2.26666Z" fill="#7D7D7D"/>
                    <path d="M2.22244 10.1333V4.39444C2.22244 4.03333 3.38355 3.37222 5.278 3.37222C7.17244 3.37222 8.33355 4.03889 8.33355 4.39444V5.38889C8.70167 5.33201 9.07257 5.29492 9.44466 5.27777V4.39444C9.44466 2.99444 7.35022 2.26111 5.278 2.26111C3.20577 2.26111 1.11133 3 1.11133 4.39444V10.1333C1.11133 11.3333 2.65022 12.0389 4.38911 12.2222V11.1111C3.03355 10.9333 2.22244 10.4333 2.22244 10.1333Z" fill="#7D7D7D"/>
                    <path d="M9.99989 6.02779C7.261 6.02779 5.19434 7.07223 5.19434 8.46112V15.3C5.19434 16.6889 7.261 17.7333 9.99989 17.7333C12.7388 17.7333 14.8054 16.6889 14.8054 15.3V8.46112C14.8054 7.07223 12.7388 6.02779 9.99989 6.02779ZM13.6943 10.2889C13.2221 10.8445 11.7943 11.4 9.99989 11.4C9.2493 11.4078 8.50132 11.3106 7.77767 11.1111V11.9222C8.5048 12.1006 9.25121 12.1883 9.99989 12.1833C11.2872 12.2356 12.5645 11.9359 13.6943 11.3167V13.05C13.2221 13.6056 11.7943 14.1611 9.99989 14.1611C9.24904 14.1671 8.50105 14.068 7.77767 13.8667V14.6778C8.5048 14.8562 9.25121 14.9439 9.99989 14.9389C11.2872 14.9911 12.5645 14.6915 13.6943 14.0722V15.3445C13.6943 15.8722 12.2221 16.6667 9.99989 16.6667C7.77767 16.6667 6.30545 15.8722 6.30545 15.3445V8.46112C6.30545 7.93334 7.77767 7.1389 9.99989 7.1389C12.2221 7.1389 13.6943 7.93334 13.6943 8.46112V10.2889Z" fill="#7D7D7D"/>
                </svg>
                <p className = {cl.cartP}>Бонусы</p>
            </div>      
            <div className = {cl.data}>
                <AiOutlineMenu className = {cl.icons} />
                <p className = {cl.cartP}>Личные данные</p>
            </div>      
            <div className = {cl.watchedShop}>
                <GrDocument className = {cl.icons} />
                <p className = {cl.cartP}>История покупок</p>
            </div>
            <div className = {cl.quit} onClick = {onClickLogout} >
                <ImExit className = {cl.icons} />
                <p className = {cl.cartP}>Выйти</p>
            </div>      
        </div>  
    </div>
  );
}

export default ProfileLoggined;
