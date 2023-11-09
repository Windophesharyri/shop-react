import cl from './ProfileWindow.module.css';

import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import Login from '../Login/Login';

import { useState } from 'react';

function ProfileWindow() {
    const [showLogin, setShowLogin] = useState(false)
    const onClickLogin = () => { setShowLogin(current => !current) }

  return (
    <div className = {cl.root}>
        <div className = {cl.inner}>
            <div className = {cl.header}>
                <div className = {cl.profileIcon}></div>
                <button className = {cl.loginButton} onClick = {onClickLogin}>Войти</button>
                { showLogin && < Login state = {setShowLogin} /> }
            </div>
            <div className = {cl.cart}>
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
        </div>  
    </div>
  );
}

export default ProfileWindow;
