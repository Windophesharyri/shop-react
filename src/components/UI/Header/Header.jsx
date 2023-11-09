import cl from "./Header.module.css"
import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {PiHeartThin} from 'react-icons/pi'
import {BsHandbag} from 'react-icons/bs'

import { useState } from "react"
import { NavLink } from 'react-router-dom'

import ProfileLoggined from '../../UI/ProfileLoggined/ProfileLoggined';
import ProfileWindow from '../../UI/ProfileWindow/ProfileWindow';
import Menu from "../Menu/Menu"

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const onClick = () => { setShowMenu(current => !current) }
  
    const [showProfile, setShowProfile] = useState(false)
    const onClickProfile = () => { setShowProfile(current => !current) }
    console.log(localStorage.getItem('authoritorized'));
    const loginCheck = () => {
      if (localStorage.getItem('authoritorized')) {
        return (
          <ProfileLoggined state = {setShowProfile} />
        )
      } if (localStorage.getItem('authoritorized') == false || localStorage.getItem('authoritorized') == null) {
        return (
          <ProfileWindow state = {setShowProfile} />
        )
      }
    }

    return (
        <div className = {cl.header}>
        <AiOutlineMenu className = {cl.menuButton} onClick = {onClick}/>  
        <div className = {cl.headerRightSide}>
        <BsSearch  className = {cl.searchButton}/>
        <input className = {cl.searchInput} placeholder = "Поиск"></input>
        <AiOutlineUser className = {cl.profileButton} onClick = {onClickProfile} />
        <PiHeartThin className = {cl.favouriteButton} />
        <NavLink to = "/cart">
          <BsHandbag className = {cl.cartButton} />
        </NavLink>
        {/* <ProfileLoggined state = {setShowProfile} /> */}
        { showProfile && loginCheck()}
        { showMenu && <Menu /> }  
      </div>
      </div>
    )
}

export default Header