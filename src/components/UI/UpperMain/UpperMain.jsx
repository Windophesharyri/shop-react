import cl from "./UpperMain.module.css"
import { NavLink } from 'react-router-dom'
import mainPic1 from './/pics/mainPic1.jpg'
import mainPic2 from './/pics/mainPic2.jpg'
function UpperMain() {
    return (
        <div>
            <div className = {cl.picDiv}>
                <div className = {cl.picDivInner}>
                    <img src = {mainPic1} className = {cl.leftFirstPic} alt = "picture" />
                    <p className = {cl.headerMainP}> Добро пожаловать в <span className = {cl.headerMainPImportant}> Cocteil</span> </p>
                </div>
            <img src = {mainPic2} className = {cl.rightFirstPic} alt = "picture" />
            </div>  
            <span className = {cl.headerMainAdittionalP}>Экономим Ваше время!<br /></span>
            <span className = {cl.headerMainAdittionalP}>Предлагаем лучшие цены!<br /></span>
            <span className = {cl.headerMainAdittionalP}>Доставляем в кратчайшие сроки!<br /></span>
            < NavLink to = '/catalog'>
            <div className = {cl.catalogButton}>
                <div className = {cl.catalogIcon}>
                    <div className = {cl.catalogText}>
                        Каталог
                    </div>
                    <div className = {cl.catalogImg}>
                        <svg className = {cl.elipseButtonArrow} xmlns="http://www.w3.org/2000/svg" width="80" height="8" viewBox="0 0 80 8" fill="none"><path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E"/></svg>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    )
}

export default UpperMain