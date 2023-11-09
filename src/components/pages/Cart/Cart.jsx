import cl from './Cart.module.css';
import { useState } from 'react';
import Header from '../../UI/Header/Header';
import firstPicture from './/pics/firstPicture.jpg'

import {AiOutlineHeart} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'

import { NavLink } from 'react-router-dom'

function Cart() {
    const mainData = JSON.parse(localStorage.getItem('Cart'))

    let allCount = 0
    mainData.map(elem => {
        allCount += elem.count
    })

    const addItem = (e) => {
        console.log(e);
        mainData.map(elem => {
            if (elem.name == e) {
                elem.count += 1
                localStorage.removeItem('Cart')
                localStorage.setItem('Cart', JSON.stringify(mainData))
                window.location.reload()
            }
        })
    }
    const deleteItem = (e) => {
        mainData.map(elem => {
            if (elem.name == e) {
                if (elem.count == 1) {
                    mainData.splice(mainData.indexOf(elem), 1)
                    localStorage.removeItem('Cart')
                    localStorage.setItem('Cart', JSON.stringify(mainData))
                    window.location.reload()
                } else {
                elem.count -= 1
                localStorage.removeItem('Cart')
                localStorage.setItem('Cart', JSON.stringify(mainData))
                window.location.reload()
                }
            }
        })
    }
    
    let totalPrice = 0
    
    mainData.map(elem => {
        totalPrice += (Number(elem.price.slice(0, -5)) * Number(elem.count))
    }) 
    function multiply(fv, sv) {
        const result = Number(fv.slice(0, -5)) * Number(sv)
        return result
    }
  return (
    <div className = {cl.root}>
        <Header />
        <div className = {cl.headerCart}>
        <NavLink to = "/">
            <div className={cl.backButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 18 8" fill="none">
                    <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="#FFFDF5"/>
                </svg>  
            </div>
        </NavLink>
            <p className = {cl.mainP}>Корзина</p>
            <svg className = {cl.shopIcon} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M23.6117 11.3333V8.54715C23.6117 7.67896 23.4407 6.81928 23.1084 6.01718C22.7762 5.21509 22.2892 4.48628 21.6753 3.87238C21.0614 3.25849 20.3326 2.77152 19.5305 2.43928C18.7284 2.10704 17.8687 1.93604 17.0005 1.93604C16.1324 1.93604 15.2727 2.10704 14.4706 2.43928C13.6685 2.77152 12.9397 3.25849 12.3258 3.87238C11.7119 4.48628 11.2249 5.21509 10.8927 6.01718C10.5604 6.81928 10.3894 7.67896 10.3894 8.54715V15.1583C10.3894 15.4087 10.4889 15.649 10.6661 15.8261C10.8432 16.0032 11.0834 16.1027 11.3339 16.1027C11.5844 16.1027 11.8246 16.0032 12.0017 15.8261C12.1788 15.649 12.2783 15.4087 12.2783 15.1583V13.2221H19.8339V11.3333H12.2783V8.54715C12.2783 7.29473 12.7758 6.09362 13.6614 5.20803C14.547 4.32244 15.7481 3.82492 17.0005 3.82492C18.253 3.82492 19.4541 4.32244 20.3397 5.20803C21.2252 6.09362 21.7228 7.29473 21.7228 8.54715V15.111C21.7228 15.3615 21.8223 15.6017 21.9994 15.7789C22.1765 15.956 22.4167 16.0555 22.6672 16.0555C22.9177 16.0555 23.1579 15.956 23.335 15.7789C23.5121 15.6017 23.6117 15.3615 23.6117 15.111V13.2221H28.3339V30.2221H5.66721V13.2221H8.50054V11.3333H3.77832V30.3071C3.77832 30.7856 3.96837 31.2444 4.30667 31.5827C4.64496 31.921 5.10379 32.111 5.58221 32.111H28.4189C28.8973 32.111 29.3561 31.921 29.6944 31.5827C30.0327 31.2444 30.2228 30.7856 30.2228 30.3071V11.3333H23.6117Z" fill="#121212"/>
            </svg>
            <p className = {cl.cartNumber}>{allCount}</p>
        </div>
        <div className = {cl.rootOffers}>
        {mainData.map((elem, index) => {
            return (
                <div className = {cl.offerRoot}>
                    <div className = {cl.picture}>
                        <img src = {elem.photo} className = {cl.firstPicture} alt = "picture" />
                    </div>
                    <div className = {cl.bodyOffer}>
                        <div className = {cl.headerOffer}>
                            <p className = {cl.thingName}>{elem.name}</p>
                            <p className = {cl.articleName}>Арт 09456784</p>
                        </div>
                        <div className = {cl.mainOffer}>
                            <p className = {cl.colorName}>Цвет: {elem.colour}</p>
                            <p className = {cl.sizeName}>Размер: {elem.size}</p>
                        </div>
                        <div className = {cl.thingPlusMinus}>
                            <div className = {cl.minus} onClick = {e => deleteItem(elem.name)}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.4444 9.44434H5.55556C5.40821 9.44434 5.26691 9.50287 5.16272 9.60705C5.05853 9.71124 5 9.85255 5 9.99989C5 10.1472 5.05853 10.2885 5.16272 10.3927C5.26691 10.4969 5.40821 10.5554 5.55556 10.5554H14.4444C14.5918 10.5554 14.7331 10.4969 14.8373 10.3927C14.9415 10.2885 15 10.1472 15 9.99989C15 9.85255 14.9415 9.71124 14.8373 9.60705C14.7331 9.50287 14.5918 9.44434 14.4444 9.44434Z" fill="#514A7E"/>
                                </svg> 
                            </div>
                            <p className = {cl.count}>{elem.count}</p>
                            <div className = {cl.plus} onClick = {e => addItem(elem.name)}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6666 9.4445H10.5555V3.33339C10.5555 3.18605 10.497 3.04474 10.3928 2.94055C10.2886 2.83636 10.1473 2.77783 9.99993 2.77783C9.85259 2.77783 9.71128 2.83636 9.60709 2.94055C9.50291 3.04474 9.44437 3.18605 9.44437 3.33339V9.4445H3.33326C3.18592 9.4445 3.04461 9.50303 2.94043 9.60722C2.83624 9.7114 2.77771 9.85271 2.77771 10.0001C2.77497 10.0723 2.78773 10.1442 2.81515 10.2111C2.84257 10.2779 2.88399 10.3381 2.93664 10.3876C2.98929 10.4371 3.05193 10.4747 3.12035 10.4979C3.18877 10.5212 3.26137 10.5295 3.33326 10.5223H9.44437V16.6667C9.44437 16.8141 9.50291 16.9554 9.60709 17.0596C9.71128 17.1637 9.85259 17.2223 9.99993 17.2223C10.1473 17.2223 10.2886 17.1637 10.3928 17.0596C10.497 16.9554 10.5555 16.8141 10.5555 16.6667V10.5556H16.6666C16.8139 10.5556 16.9552 10.4971 17.0594 10.3929C17.1636 10.2887 17.2222 10.1474 17.2222 10.0001C17.2222 9.85271 17.1636 9.7114 17.0594 9.60722C16.9552 9.50303 16.8139 9.4445 16.6666 9.4445Z" fill="#514A7E"/>
                            </svg>
                            </div>
                        </div>
                        <div className = {cl.footerOffer}>
                            <div className = {cl.favouriteOffer}>
                                <AiOutlineHeart className = {cl.offerIcons} />
                                <p className = {cl.favouriteText}>В избранное</p>
                            </div>
                            <div className = {cl.deleteOffer}>
                                <RiDeleteBin6Line className = {cl.offerIcons} />
                                <p className = {cl.deleteText}>Удалить</p>
                            </div>
                        </div>
                    </div>
                    <div className = {cl.rightSide}>
                        <p className = {cl.priceLabel}>Стоимость</p>
                        <p className = {cl.price}>{multiply(elem.price, elem.count)}.00</p>
                        <div className = {cl.informationDiv}>
                            <p className = {cl.information}>Информация о доставке</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 12 8" fill="none">
                                <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269205 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM-4.61502e-08 4.5L11 4.5L11 3.5L4.61502e-08 3.5L-4.61502e-08 4.5Z" fill="#514A7E"/>
                            </svg>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className = {cl.pageFooter}>
            <p className = {cl.priceTotal}>Итого: <span className = {cl.totalPrice}> {totalPrice}.00</span></p>
            <p className = {cl.items}>Товары, <span>{allCount} </span>штуки</p>
        </div>
            <button className = {cl.order}>Заказать</button>
        </div>
    </div>
  )
}

export default Cart;
