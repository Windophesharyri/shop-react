import cl from './CatalogItem.module.css';

import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {PiHeartThin} from 'react-icons/pi'
import {BsHandbag} from 'react-icons/bs'

import Header from '../../UI/Header/Header';

import { NavLink } from 'react-router-dom'

import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

import Picture from './/pics/Picture.jpg'

import { useState } from 'react';
// import secondPicture from './/pics/secondPicture.jpg'
// import thirdPicture from './/pics/thirdPicture.jpg'
// import fourthPicture from './/pics/fourthPicture.jpg'
// import fifthPicture from './/pics/fifthPicture.jpg'
// import sixthPicture from './/pics/sixthPicture.jpg'

const itemContent = JSON.parse(localStorage.getItem('chosedItem'))
function CatalogItem() {
    const [colour, setColour] = useState('')
    const [size, setSize] = useState('')

    const chooseColour = (e) => {
        setColour(e);
        // setColour(e.target.value)
    }
    const chooseSize = (e) => {
        setSize(e)
        // setSize(e.target.value)
    }
    
    const addCart = () => {
        if (colour == '' || size == '') {
            alert('Вы не выбрали все данные')
        } else {
        const object =  {
            photo: itemContent.photo,
            name: itemContent.name,
            price: itemContent.price,
            colour: colour,
            size: size,
            count: 1
        }
        if (localStorage.getItem('Cart') == null) {
            const Data = [object]
            localStorage.setItem('Cart', JSON.stringify(Data))
            alert('Товар успешно добавлен в корзину.')
        } else {
        const mainData = JSON.parse(localStorage.getItem('Cart'))
        mainData.map(elem => {
            if (elem.name == object.name) {
                elem.count += 1
                localStorage.removeItem('Cart')
                localStorage.setItem('Cart', JSON.stringify(mainData))
            } else {
                mainData.push(object)
                localStorage.removeItem('Cart')
                localStorage.setItem('Cart', JSON.stringify(mainData))
                alert('Товар успешно добавлен в корзину.')
            }
        })
        }
    }
    }
  return (
    <div className = {cl.root}>
        <Header />
        <div className = {cl.header}>
            <NavLink to = "/catalog">
            <div className={cl.backButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 18 8" fill="none">
                    <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="#FFFDF5"/>
                </svg>  
            </div>
            </NavLink>
            <p className = {cl.routes}>Главная/ {localStorage.getItem('firstRoute')} <span className = {cl.routesMain}>/{localStorage.getItem('secondRoute')}</span></p>
        </div>

        <div className = {cl.itemHeader}>
            <p className = {cl.main}>{itemContent.name}</p>
            <p className = {cl.additional}>Арт 06578990-086</p>
        </div>
        <div className = {cl.itemBody}>
            <div>
                <img src = {itemContent.photo} className = {cl.pic}></img>
            </div>
            <div className = {cl.itemContent}>
                <p className = {cl.price}>{itemContent.price}</p>
                <p className = {cl.colour}>Цвета</p>
                <div className = {cl.coloursDiv}>
                    <div className = {cl.white} onClick = {e => chooseColour('белый')}></div>
                    <div className = {cl.black} onClick = {e => chooseColour('чёрный')}></div>
                    <div className = {cl.green} onClick = {e => chooseColour('зелёный')}></div>
                    <div className = {cl.pink} onClick = {e => chooseColour('розовый')}></div>
                    <div className = {cl.yellow} onClick = {e => chooseColour('жёлтый')}></div>
                </div>
                <p className = {cl.size}>Размер</p>
                <div className = {cl.sizeDiv}>
                    <button className = {cl.sSize} onClick = {e => chooseSize('42')}><span className = {cl.up}>S</span><span className = {cl.down}>42</span></button>
                    <button className = {cl.mSize} onClick = {e => chooseSize('44')}><span className = {cl.up}>M</span><span className = {cl.down}>44</span></button>
                    <button className = {cl.lSize} onClick = {e => chooseSize('46')}><span className = {cl.up}>L</span><span className = {cl.down}>46</span></button>
                    <button className = {cl.xlSize} onClick = {e => chooseSize('48')}><span className = {cl.up}>XL</span><span className = {cl.down}>48</span></button>
                </div>
                <p className = {cl.priceTable}>Таблица размеров</p>
                <div className = {cl.actionsDiv}>
                    <button className = {cl.buy} onClick = {addCart}>В корзину<BsHandbag/></button>
                    <PiHeartThin className = {cl.favourite} />
                </div> 
                <div className = {cl.starDiv}>
                    <AiFillStar className = {cl.star} /><AiFillStar className = {cl.star} /><AiFillStar className = {cl.star} /><AiFillStar className = {cl.star} /><AiFillStar className = {cl.star} />
                </div>
                <div className = {cl.reviewDiv}>
                    <p className = {cl.allReviews}>Смотреть все отзывы</p>
                    <p className = {cl.addReviews}>Добавить отзыв</p>
                </div>
                <p className = {cl.descriptionTitle}>Описание</p>
                <p className = {cl.descriptionContent}>fjklsafasnjflafsahjfhhjksfajkbsafjhkfsajhsfajhfasjhk</p>
            </div>
        </div>
    </div>
  );
}

export default CatalogItem;
