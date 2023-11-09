import cl from "./Registration.module.css"
import { AiFillStar } from 'react-icons/ai'

import { useState } from "react"
function Registration({state}) {

    const onClickClose = () => { state(current => !current) }

    const onClickLogin = () => { 
        if (localStorage.getItem('authoritorized') == null || localStorage.getItem('authoritorized') == 0) {
            state(current => !current) 
            localStorage.setItem('authoritorized', true)
        } else {
            alert("You already login")
        }
    }
    console.log(localStorage.getItem('authoritorized'));
    return (
        <div className={cl.root}>
            <div className={cl.rootModal}>
                <div className={cl.inner}>
                    <div className={cl.divCloseButton}>
                        <div className={cl.closeButton} onClick = {onClickClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.7831 9.99972L15.3887 5.39417C15.4797 5.28789 15.5272 5.15118 15.5218 5.01136C15.5164 4.87154 15.4585 4.73891 15.3595 4.63997C15.2606 4.54102 15.128 4.48306 14.9881 4.47766C14.8483 4.47226 14.7116 4.51982 14.6053 4.61083L9.99977 9.21639L5.39421 4.60528C5.2896 4.50067 5.14771 4.44189 4.99977 4.44189C4.85182 4.44189 4.70994 4.50067 4.60532 4.60528C4.50071 4.70989 4.44194 4.85178 4.44194 4.99972C4.44194 5.14767 4.50071 5.28955 4.60532 5.39417L9.21643 9.99972L4.60532 14.6053C4.54717 14.6551 4.49993 14.7164 4.46659 14.7853C4.43324 14.8542 4.4145 14.9293 4.41155 15.0058C4.40859 15.0823 4.42148 15.1586 4.44941 15.2299C4.47734 15.3012 4.51971 15.3659 4.57385 15.4201C4.62799 15.4742 4.69274 15.5166 4.76403 15.5445C4.83532 15.5725 4.91162 15.5853 4.98813 15.5824C5.06464 15.5794 5.13972 15.5607 5.20864 15.5273C5.27757 15.494 5.33885 15.4468 5.38866 15.3886L9.99977 10.7831L14.6053 15.3886C14.7116 15.4796 14.8483 15.5272 14.9881 15.5218C15.128 15.5164 15.2606 15.4584 15.3595 15.3595C15.4585 15.2605 15.5164 15.1279 15.5218 14.9881C15.5272 14.8483 15.4797 14.7116 15.3887 14.6053L10.7831 9.99972Z" fill="#FFFDF5" />
                            </svg>
                        </div>
                    </div>
                    <p className={cl.mainP}>Регистрация</p>
                    <div className = {cl.inputs}>
                        <div className = {cl.leftInputs}>
                            <input className={cl.firstInput} placeholder="ФИО"></input>
                            <input className={cl.secondInput} placeholder="Контактный телефон"></input> 
                            <input className={cl.thirdInput} placeholder="Индекс"></input>
                            <input className = {cl.roundedInput} type = "checkbox"></input> 
                        </div>
                        <div className = {cl.rightInputs}>
                            <input className={cl.firstInput} placeholder="Ваш полный адрес (только РБ)"></input>
                            <input className={cl.secondInput} placeholder="Электронная почта"></input> 
                            <input className={cl.thirdInput} placeholder="Комментарий"></input>             
                        </div>
                    </div>
                    <div className = {cl.buttons}>
                        <button className = {cl.login} onClick = {onClickLogin}>Отправить</button>
                        <button className = {cl.registration}>Войти в кабинет</button>
                    </div>
                </div>
                <div className = {cl.sideCircle}></div>
            </div>
        </div>
    )
}

export default Registration