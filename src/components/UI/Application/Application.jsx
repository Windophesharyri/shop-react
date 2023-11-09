import cl from "./Application.module.css"
import { useState } from 'react';

function Application() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [mail, setMail] = useState('')
    const [checkbox, setCheckbox] = useState('')

    const [nameWrong, setNameWrong] = useState(false)
    const [numberWrong, setNumberWrong] = useState(false)
    const [mailWrong, setMailWrong] = useState(false)
    const [checkboxWrong, setCheckboxWrong] = useState(false)

    const [nameError, setNameError] = useState('Заполните поле')
    const [numberError, setNumberError] = useState('Заполните поле')
    const [mailError, setMailError] = useState('Заполните поле')
    const [checkboxError, setCheckboxError] = useState('Заполните поле')    

    const mailHandler = (e) => {
        setMail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value))) {
            setMailError('Некорректная почта')
        } else {
            setMailError('')
        }
    }

    const checkboxHandler = (e) => {
        setCheckbox(e.target.value)
        console.log(e.target);
        if (e.target.checked) {
            setCheckboxError('')
        } else {
            setCheckboxError('Вы обязаны подтвердить')
        }
    }
    const numberHandler = (e) => {
        setNumber(e.target.value)
        const num = /^\d+$/;
        if (!num.test(String(e.target.value))) {
            setNumberError('Некорректный номер')
        } else {
            setNumberError('')
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 1) {
            setNameError('Заполните поле')
        } else {
            setNameError('')
        }
    }

    const blur = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameWrong(true)
                break
            case 'number':
                setNumberWrong(true)
                break
            case 'mail':
                setMailWrong(true)
                break
            case 'checkbox':
                setCheckboxWrong(true)
                break
        }
    }

    return (
        <div className = {cl.applicationOuter}>
                <div className = {cl.applicationInner}>
                    <div className = {cl.innerContent}>
                        <p className = {cl.applicationMainText}>Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</p>
                        {(nameWrong && nameError) && <div style = {{color:'red'}}>{nameError}</div>}
                        <input onChange = {e => nameHandler(e)} value = {name} onBlur = {e => blur(e)} name = 'name' className = {cl.nameInput} placeholder = "Ваше имя"></input>
                        {(numberWrong && numberError) && <div style = {{color:'red'}}>{numberError}</div>}
                        <input onChange = {e => numberHandler(e)} value = {number} onBlur = {e => blur(e)} name = 'number' className = {cl.phoneInput} placeholder = "Номер телефона"></input>
                        {(mailWrong && mailError) && <div style = {{color:'red'}}>{mailError}</div>}
                        <input onChange = {e => mailHandler(e)} value = {mail} onBlur = {e => blur(e)} name = 'mail' className = {cl.emailInput} placeholder = "Электронная почта"></input>
                        <div className = {cl.personalData}>
                            {(checkboxWrong && checkboxError) && <div style = {{color:'red'}}>{checkboxError}</div>}
                            <input onChange = {e => checkboxHandler(e)} value = {checkbox} onBlur = {e => blur(e)} name = 'checkbox' className = {cl.roundInput} type = "checkbox" />
                            <p className = {cl.personalDataP}>Даю согласие на обработку персональных данных</p>
                        </div>
                        <div className = {cl.sendButtonDiv}>
                            <button className = {cl.sendButton}>Отправить
                            <svg className = {cl.arrowSendButton} xmlns="http://www.w3.org/2000/svg" width="40  " height="10" viewBox="0 0 26 5" fill="none">
                                <path d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z" fill="#FFFDF5"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Application