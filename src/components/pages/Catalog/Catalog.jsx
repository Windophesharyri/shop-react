import cl from './Catalog.module.css';

import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {PiHeartThin} from 'react-icons/pi'
import {BsHandbag} from 'react-icons/bs'

import Header from '../../UI/Header/Header';

import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

import firstPicture from './/pics/firstPicture.jpg'
import secondPicture from './/pics/secondPicture.jpg'
import thirdPicture from './/pics/thirdPicture.jpg'
import fourthPicture from './/pics/fourthPicture.jpg'
import fifthPicture from './/pics/fifthPicture.jpg'
import sixthPicture from './/pics/sixthPicture.jpg'


const catalogFirst = [
    {
        photo: firstPicture,
        price: '100.00 р',
        name: "ыафлщФЫАДОАЛЖЫаыфдожж",
        stars: 5
    },
    {
        photo: secondPicture,
        price: '150.00 р',
        name: "fskpfsaolk;fsakosaf",
        stars: 5
    },
    {
        photo: thirdPicture,
        price: '600.00 р',
        name: "fsadjosfalj;fasdjkl;asgdgasd",
        stars: 5,
    }
]
const catalogSecond = [
    {
        photo: fourthPicture,
        price: '1000.00 р',
        name: "afasfosaofojd",
        stars: 5
    },
    {
        photo: fifthPicture,
        price: '1.00 р',
        name: "ъзэждлдазжфыдла",
        stars: 5
    },
    {
        photo: sixthPicture,
        price: '20 р',
        name: "fsafgasgsagsagg",
        stars: 5
    },

]

function Catalog() {
    const routeAdvistor = (e) => {
        catalogFirst.map(elem => {
            if (elem.photo == e.target.parentNode.parentNode.firstChild.src.slice(21, e.target.parentNode.parentNode.firstChild.src.length)) {
                const object = {
                    photo: elem.photo,
                    price: elem.price,
                    name: elem.name,
                    stars: elem.stars
                }
                localStorage.setItem('chosedItem', JSON.stringify(object));
                window.location.href = '/item';
            }
        })
        // const object = {
        //     name: ,
        //     price: ,
        //     photo: ,
        // }
      }
  return (
    <div className = {cl.root}>
        <div className = {cl.upper}>
            <Header />
            <p className = {cl.routes}>Главная/ {localStorage.getItem('firstRoute')} <span className = {cl.routesMain}>/{localStorage.getItem('secondRoute')}</span></p>
            <div className = {cl.catalogHeader}>
                <p className = {cl.mainP}>????</p>
                <div className = {cl.bodyHeader}>
                    <p className = {cl.sortBy}>Сортировать по:</p>
                    <p className = {cl.popularity}>Популярности</p>
                    <p className = {cl.rating}>Рейтингу</p>
                    <p className = {cl.price}>Цене</p>
                    <p className = {cl.discount}>Скидке</p>
                    <p className = {cl.update}>Обновлению</p>
                </div>
                <div className = {cl.side}>
                        <p className = {cl.priceSide}>Цена, б.р</p>
                        <div className = {cl.rangeDiv}>
                            <p className = {cl.at}>От</p>
                            <p className = {cl.to}>До</p>
                        </div>
                        <input type = 'range' className = {cl.rangeSide}></input>
                        <div className = {cl.sizeDiv}>
                            <p className = {cl.sizeSide}>Размер</p>
                            <MdOutlineKeyboardArrowDown className = {cl.arrowIcon} />
                        </div>
                        <div className = {cl.colourDiv}>
                            <p className = {cl.colourSide}>Цвета</p>
                            <MdOutlineKeyboardArrowDown className  = {cl.arrowIcon} />
                        </div>
                    </div>
            </div>
            <div className = {cl.catalogItems}>
                <div className = {cl.firstRow}>
                { catalogFirst.map((elem, index) => {
                return (
                    <div className = {cl.Promotions}>
                        <img src = {elem.photo} className = {cl.promotionsFirstPic} alt = "First promotion picture"></img>
                        <div className = {cl.priceDiv}>
                            <p className = {cl.actualPrice}>{elem.price}</p>
                        </div>
                        <div className = {cl.info}>
                            <p className = {cl.infoText}>{elem.name}</p>
                            <PiHeartThin className = {cl.promotionsFavouriteButton} />
                            <BsHandbag className = {cl.promotionsCartButton}/>
                        </div>
                        <div className = {cl.infoFooter}>
                            <button className = {cl.moreButton} onClick = {e => routeAdvistor(e)}>Подробнее  
                                <svg className = {cl.moreButtonArrow} xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                                <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                                </svg>
                            </button>
                            <div className = {cl.starDiv}>
                                <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} />
                            </div>
                        </div>
                    </div>  
                )
                })}
                </div>
                <div className = {cl.secondRow}>
                    { catalogSecond.map((elem, index) => {
                    return (
                        <div className = {cl.Promotions}>
                            <img src = {elem.photo} className = {cl.promotionsFirstPic} alt = "First promotion picture"></img>
                            <div className = {cl.priceDiv}>
                                <p className = {cl.actualPrice}>{elem.price}</p>
                            </div>
                            <div className = {cl.info}>
                                <p className = {cl.infoText}>{elem.name}</p>
                                <div className = {cl.functionalIcons}>
                                    <PiHeartThin className = {cl.promotionsFavouriteButton} />
                                    <BsHandbag className = {cl.promotionsCartButton}/>
                                </div>
                            </div>
                            <div className = {cl.infoFooter}>
                                <button className = {cl.moreButton} onClick = {e => routeAdvistor(e)}>Подробнее  
                                    <svg className = {cl.moreButtonArrow} xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                                    <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                                    </svg>
                                </button>
                                <div className = {cl.starDiv}>
                                    <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} />
                                </div>
                            </div>
                        </div>  
                    )
                    })}
                </div>
            </div>
    </div> 
    </div> 
  );
}

export default Catalog;
