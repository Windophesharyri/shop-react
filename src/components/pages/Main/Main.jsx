import cl from './Main.module.css';

import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {PiHeartThin} from 'react-icons/pi'
import {BsHandbag} from 'react-icons/bs'

import Header from '../../UI/Header/Header';
import UpperMain from '../../UI/UpperMain/UpperMain';
import SideCircle from '../../UI/SideCircle/SideCircle';
import Choose from '../../UI/Choose/Choose';
import Promotions from '../../UI/Promotions/Promotions';
import Reviews from '../../UI/Reviews/Reviews';
import SecondSideCircle from '../../UI/SecondSideCircle/SecondSideCircle';
import Cooperation from '../../UI/Cooperation/Cooperation';
import FAQ from '../../UI/FAQ/FAQ'
import Application from '../../UI/Application/Application';
import Footer from '../../UI/Footer/Footer'
import Menu from '../../UI/Menu/Menu';
import { useState } from 'react';
import PostReview from '../../UI/PostReview/PostReview';
import ProfileWindow from '../../UI/ProfileWindow/ProfileWindow';
import Login from '../../UI/Login/Login';
import ProfileLoggined from '../../UI/ProfileLoggined/ProfileLoggined';
import Registration from '../../UI/Registration/Registration';
import Cart from '../Cart/Cart';

function Main() {

  const boolLogin = false
  const checkForLogin = () => {
  if (localStorage.getItem('authoritorized')) {
      // < ProfileLoggined />
      boolLogin = true
    } else {
      // < ProfileWindow />
      boolLogin = false
    }
  }
  // if (setShowMenu(true)) 
  // {
  //   setShowMenu(true)
  // } else {
  //   setShowMenu(false)
  // }
  return (
    <div className = {cl.root}>
        <div className = {cl.upper}>
          {/* < Registration /> */}
          {/* < Login /> */}
          {/* < Cart /> */}
            <Header />
            <UpperMain />
            <SideCircle />
            <Choose />
            <Promotions />
            <Reviews />
            <SecondSideCircle />
            <FAQ />
            <Cooperation />
    </div> 
        <div className = {cl.footer}>
            <Application />
            <Footer />
        </div> 
    </div> 
  );
}

export default Main;
