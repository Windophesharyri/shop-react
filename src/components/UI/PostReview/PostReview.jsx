import cl from "./PostReview.module.css"
import { AiFillStar } from 'react-icons/ai'
import feedbackFirstPic from './/pics/feedbackFirstPic.jpg'

import { useState } from "react"
import Reviews from "../Reviews/Reviews"


function PostReview({state}) {
    const onClickProfile = () => { state(current => !current) }

    const [authorValue, setAuthorName] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')

    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const fInputHandler = (e) => {
        setAuthorName(e.target.value)
    }
    const sInputHandler = (e) => {
        setDescriptionValue(e.target.value)
    }

    const onClickAddReview = () => {
        const object =  {
            photo: feedbackFirstPic,
            stars: 5,
            description: descriptionValue,
            author: authorValue,
            date: `${day}.${month}.${year}`
    }
        const mainData = JSON.parse(localStorage.getItem('Reviews'))
        mainData.push(object)
        console.log(mainData);
        localStorage.removeItem('Reviews')
        localStorage.setItem('Reviews', JSON.stringify(mainData))
        state(current => !current)
        window.location.reload()
    }
    return (

        <div className={cl.root}>
            <div className={cl.rootModal}>
                <div className={cl.inner}>
                    <div className={cl.divCloseButton}>
                        <div className={cl.closeButton} onClick = {onClickProfile}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.7831 9.99972L15.3887 5.39417C15.4797 5.28789 15.5272 5.15118 15.5218 5.01136C15.5164 4.87154 15.4585 4.73891 15.3595 4.63997C15.2606 4.54102 15.128 4.48306 14.9881 4.47766C14.8483 4.47226 14.7116 4.51982 14.6053 4.61083L9.99977 9.21639L5.39421 4.60528C5.2896 4.50067 5.14771 4.44189 4.99977 4.44189C4.85182 4.44189 4.70994 4.50067 4.60532 4.60528C4.50071 4.70989 4.44194 4.85178 4.44194 4.99972C4.44194 5.14767 4.50071 5.28955 4.60532 5.39417L9.21643 9.99972L4.60532 14.6053C4.54717 14.6551 4.49993 14.7164 4.46659 14.7853C4.43324 14.8542 4.4145 14.9293 4.41155 15.0058C4.40859 15.0823 4.42148 15.1586 4.44941 15.2299C4.47734 15.3012 4.51971 15.3659 4.57385 15.4201C4.62799 15.4742 4.69274 15.5166 4.76403 15.5445C4.83532 15.5725 4.91162 15.5853 4.98813 15.5824C5.06464 15.5794 5.13972 15.5607 5.20864 15.5273C5.27757 15.494 5.33885 15.4468 5.38866 15.3886L9.99977 10.7831L14.6053 15.3886C14.7116 15.4796 14.8483 15.5272 14.9881 15.5218C15.128 15.5164 15.2606 15.4584 15.3595 15.3595C15.4585 15.2605 15.5164 15.1279 15.5218 14.9881C15.5272 14.8483 15.4797 14.7116 15.3887 14.6053L10.7831 9.99972Z" fill="#FFFDF5" />
                            </svg>
                            {/* { null && < Reviews /> } */}
                        </div>
                    </div>
                    <p className={cl.mainP}>Ваш отзыв</p>
                    <div>
                        <input onChange = {e => fInputHandler(e)} className={cl.firstInput} placeholder="Фамилия и имя" value = {authorValue}></input>
                        <div className={cl.textAreaDiv}>
                            <div className={cl.primary}>
                                <textarea onChange = {e => sInputHandler(e)} className={cl.textArea} placeholder="Отзыв" value = {descriptionValue}></textarea>
                            </div>
                            <div className={cl.another}>
                                <p className={cl.textAreaP}>Прикрепить фото</p>
                                <svg className={cl.svgPhoto} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.678 18.1112C3.75923 18.1113 2.87726 17.7501 2.22245 17.1056L2.15023 17.0334C1.82123 16.7123 1.55982 16.3287 1.3814 15.9051C1.20297 15.4814 1.11115 15.0264 1.11134 14.5667C1.11018 14.0691 1.20779 13.5761 1.39852 13.1165C1.58924 12.6568 1.8693 12.2396 2.22245 11.8889L10.8336 3.37226C11.7085 2.4613 12.9062 1.93046 14.1688 1.89409C15.4313 1.85772 16.6576 2.31873 17.5836 3.17782C18.0012 3.59437 18.3317 4.08988 18.5558 4.63546C18.7799 5.18104 18.8933 5.76578 18.8891 6.3556C18.8842 7.01432 18.7491 7.66558 18.4917 8.27194C18.2343 8.87831 17.8596 9.42783 17.3891 9.88893L9.65023 17.5556C9.60212 17.6203 9.54051 17.6738 9.46966 17.7123C9.39881 17.7508 9.32043 17.7734 9.23996 17.7786C9.1595 17.7837 9.07887 17.7713 9.00368 17.7422C8.92849 17.7131 8.86054 17.6679 8.80456 17.6099C8.74857 17.5519 8.70589 17.4823 8.67947 17.4062C8.65306 17.33 8.64354 17.249 8.65159 17.1687C8.65963 17.0885 8.68505 17.011 8.72607 16.9415C8.76708 16.8721 8.82272 16.8125 8.88912 16.7667L16.6058 9.10004C16.9723 8.74231 17.2645 8.31571 17.4656 7.84474C17.6668 7.37377 17.7729 6.8677 17.778 6.3556C17.782 5.9124 17.6976 5.47285 17.5297 5.06267C17.3618 4.65248 17.1138 4.27989 16.8002 3.96671C16.0823 3.31274 15.1364 2.96672 14.166 3.00308C13.1956 3.03945 12.2783 3.4553 11.6113 4.16115L3.028 12.6778C2.77507 12.9234 2.57357 13.2169 2.43526 13.5412C2.29695 13.8656 2.22461 14.2142 2.22245 14.5667C2.22126 14.8763 2.28154 15.183 2.3998 15.4691C2.51805 15.7552 2.69193 16.015 2.91134 16.2334L2.98356 16.3056C3.48064 16.7633 4.13759 17.0076 4.81298 16.9858C5.48836 16.964 6.12817 16.6778 6.59467 16.1889L14.0113 8.8556C14.1516 8.71378 14.2622 8.54542 14.3366 8.36036C14.411 8.1753 14.4477 7.97725 14.4447 7.77782C14.4459 7.6046 14.4126 7.43286 14.3468 7.27262C14.281 7.11239 14.184 6.96685 14.0613 6.84449C13.7808 6.58721 13.4103 6.45059 13.0299 6.4641C12.6495 6.47761 12.2896 6.64018 12.028 6.91671L6.91689 11.9834C6.81228 12.0873 6.67069 12.1453 6.52326 12.1448C6.37584 12.1443 6.23466 12.0852 6.13078 11.9806C6.02691 11.876 5.96884 11.7344 5.96936 11.587C5.96988 11.4395 6.02895 11.2984 6.13356 11.1945L11.2669 6.11115C11.7374 5.62911 12.3786 5.35137 13.0521 5.33786C13.7256 5.32435 14.3774 5.57615 14.8669 6.03893C15.092 6.26809 15.2689 6.54003 15.3873 6.83868C15.5056 7.13733 15.5629 7.45666 15.5558 7.77782C15.5552 8.12366 15.4856 8.46591 15.3511 8.78453C15.2166 9.10315 15.0199 9.39173 14.7724 9.63338L7.378 16.9889C6.66128 17.7045 5.6908 18.1079 4.678 18.1112Z" fill="#514A7E" />
                                </svg>
                            </div>
                        </div>
                        <div className={cl.starDiv}>
                            <AiFillStar className={cl.footerStar} /> <AiFillStar className={cl.footerStar} /> <AiFillStar className={cl.footerStar} /> <AiFillStar className={cl.footerStar} /> <AiFillStar className={cl.footerStar} />
                        </div>
                        <div className={cl.sendButtonDiv}>
                            <button className={cl.sendButton} onClick = {onClickAddReview}>Сохранить
                                <svg className={cl.arrowSendButton} xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 26 5" fill="none">
                                    <path d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z" fill="#FFFDF5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostReview