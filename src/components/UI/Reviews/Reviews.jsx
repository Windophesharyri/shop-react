import cl from "./Reviews.module.css"
import {AiFillStar} from 'react-icons/ai'

import feedbackFirstPic from './/pics/feedbackFirstPic.jpg'
import feedbackSecondPic from './/pics/feedbackSecondPic.jpg'
import PostReview from "../PostReview/PostReview"

import { useState } from "react"
const firstReview = {
        photo: feedbackFirstPic,
        stars: 5,
        description: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
        author: "Анна Котлова",
        date: "23.05.2021"
    }
const secondReview = {
        photo: feedbackSecondPic,
        stars: 5,
        description: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
        author: "Анна Котлова",
        date: "23.05.2021"
    }
const firstReviews = [firstReview, secondReview]
const review = JSON.parse(localStorage.getItem('Reviews'))
if (JSON.parse(localStorage.getItem('Reviews')) == null) {
    localStorage.setItem('Reviews', JSON.stringify(firstReviews))
    window.location.reload()
}
function Reviews() {
    const [showReview, setShowReview] = useState(false)
    const onClick = () => { setShowReview(current => !current) }
    return (
        <div>
            <p className = {cl.mainFeedbackP}>Отзывы наших покупателей</p>
            <div className = {cl.feedbacks}>
                    { review.map((elem, index) => {
                        return (
                            <div className = {cl.firstFeedbackBody}>
                                <div className = {cl.feedbackPicture}>
                                <img src = {elem.photo} className = {cl.firstPicture}></img>
                                </div>
                                <div className = {cl.feedbackInfo}>
                                    <div className = {cl.starDivFeedback}>
                                    {( () => {switch (elem.stars) {
                                            case 1: return ( <AiFillStar className = {cl.footerStar} /> )
                                            case 2: return ( <div> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> </div> )
                                            case 3: return ( <div> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> </div> )
                                            case 4: return ( <div> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /></div> )
                                            case 5: return ( <div> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /></div> )
                                        }})}
                                    </div>
                                    <p className = {cl.feedbackText}>{elem.description}</p>
                                    <div className = {cl.feedbackFooter}>
                                        <p className = {cl.leftText}>{elem.author}</p>
                                        <p className = {cl.rightText}>{elem.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                {/* <div className = {cl.feedbackButton}>
                    <div className = {cl.feedbackIcon}>
                        <div className = {cl.feedbackImg}>
                            <svg className = {cl.elipseButtonArrow} xmlns="http://www.w3.org/2000/svg" width="50" height="8" viewBox="0 0 80 8" fill="none"><path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E"/></svg>
                        </div>
                    </div>
                </div> */}
            </div>
            <button className = {cl.addFeedback} onClick = {onClick}>Добавить отзыв</button>
            <div className = {cl.centered}>
                { showReview && <PostReview state = {setShowReview} /> }
            </div>
        </div>
    )
}

export default Reviews