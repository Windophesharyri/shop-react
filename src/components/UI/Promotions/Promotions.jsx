import cl from "./Promotions.module.css"
import {PiHeartThin} from 'react-icons/pi'
import {BsHandbag} from 'react-icons/bs'
import {BsArrowUp} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {BsPlusLg} from 'react-icons/bs'

import promotionsFirstPic from './/pics/promotionsFirstPic.jpg'
import promotionsSecondPic from './/pics/promotionsSecondPic.jpg'
import promotionsThirdPic from './/pics/promotionsThirdPic.jpg'
import promotionsFourthPic from './/pics/promotionsFourthPic.jpg'

const promotionsInfo = [
    {
        photo: promotionsFirstPic,
        name: "Блузка женская классная",
        nowPrice: "100 р",
        previousPrice: "150 р"
    },
    {
        photo: promotionsSecondPic,
        name: "Блузка",
        nowPrice: "10 р",
        previousPrice: "2000 р"
    },
    {
        photo: promotionsThirdPic,
        name: "Блуз",
        nowPrice: "200 р",
        previousPrice: "10 р"
    },
    {
        photo: promotionsFourthPic,
        name: "классная",
        nowPrice: "100 р",
        previousPrice: "500 р"
    },
]
const nameTOprice =
    [["Блузка женская классная", 100, 150], ["Блузка", 10, 2000], ["Блуз", 200, 10], ["классная", 100, 500]]
// nameTOprice.push()
function Promotions() {
    return (
        <div className = {cl.promotions}>
        <p className = {cl.mainText}>Успей купить!</p>
        <span className = {cl.additionalText}>Акции</span>
        <div className = {cl.allPromotions}>
        { promotionsInfo.map((elem, index) => {
            return (
                <div className = {cl.firstPromotion}>
                    <img src = {elem.photo} className = {cl.promotionsFirstPic} alt = "First promotion picture"></img>
                    <div className = {cl.priceDiv}>
                        <p className = {cl.actualPrice}>{elem.nowPrice}</p>
                        <p className = {cl.previousPrice}>{elem.previousPrice}</p>
                    </div>
                    <div className = {cl.info}>
                        <p className = {cl.infoText}>{elem.name}</p>
                            <PiHeartThin className = {cl.promotionsFavouriteButton} />
                            <BsHandbag className = {cl.promotionsCartButton}/>
                    </div>
                    <div className = {cl.infoFooter}>
                        <button className = {cl.moreButton}>Подробнее  
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
            { /*
            <div className = {cl.secondPromotion}>
                <img src = {promotionsSecondPic} className = {cl.promotionsSecondPic} alt = "First promotion picture"></img>
                <div className = {cl.priceDiv}>
                    <p className = {cl.actualPrice}>{nameTOprice[1][1] + "р"}</p>
                    <p className = {cl.previousPrice}>{nameTOprice[1][2] + "р"}</p>
                </div>
                <div className = {cl.info}>
                    <p className = {cl.infoText}>{nameTOprice[1][0]}</p>
                    <PiHeartThin className = {cl.promotionsFavouriteButton} />
                    <BsHandbag className = {cl.promotionsCartButton}/>
                </div>
                <div className = {cl.infoFooter}>
                    <button className = {cl.moreButton}>Подробнее  
                        <svg className = {cl.moreButtonArrow} xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                        <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                        </svg>
                    </button>
                    <div className = {cl.starDiv}>
                        <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} />
                    </div>
                </div>
            </div>

            <div className = {cl.thirdPromotion}>
                <img src = {promotionsThirdPic} className = {cl.promotionsThirdPic} alt = "First promotion picture"></img>
                <div className = {cl.priceDiv}>
                    <p className = {cl.actualPrice}>{nameTOprice[2][1] + "р"}</p>
                    <p className = {cl.previousPrice}>{nameTOprice[2][2] + "р"}</p>
                </div>
                <div className = {cl.info}>
                    <p className = {cl.infoText}>{nameTOprice[2][0]}</p>
                    <PiHeartThin className = {cl.promotionsFavouriteButton} />
                    <BsHandbag className = {cl.promotionsCartButton}/>
                </div>
                <div className = {cl.infoFooter}>
                    <button className = {cl.moreButton}>Подробнее  
                        <svg className = {cl.moreButtonArrow} xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                        <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                        </svg>
                    </button>
                    <div className = {cl.starDiv}>
                        <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} />
                    </div>
                </div>
            </div>

            <div className = {cl.fourthPromotion}>
                <img src = {promotionsSecondPic} className = {cl.promotionsFourthPic} alt = "First promotion picture"></img>
                <div className = {cl.priceDiv}>
                    <p className = {cl.actualPrice}>{nameTOprice[3][1] + "р"}</p>
                    <p className = {cl.previousPrice}>{nameTOprice[3][2] + "р"}</p>
                </div>
                <div className = {cl.info}>
                    <p className = {cl.infoText}>{nameTOprice[3][0]}</p>
                    <PiHeartThin className = {cl.promotionsFavouriteButton} />
                    <BsHandbag className = {cl.promotionsCartButton}/>
                </div>
                <div className = {cl.infoFooter}>
                    <button className = {cl.moreButton}>Подробнее  
                        <svg className = {cl.moreButtonArrow} xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                        <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                        </svg>
                    </button>
                    <div className = {cl.starDiv}>
                        <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} />
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    )
}

export default Promotions