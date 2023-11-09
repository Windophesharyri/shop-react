import cl from './Menu.module.css';
import LogoMenu from './/pics/LogoMenu.png'
import { useState } from 'react';
import MenuAdditional from '../MenuAdditional/MenuAdditional';
const additionalMenu = [
  {
    text: ["Майки", "Костюмы", "Брюки", "Джинсы", "Юбки", "Шорты", "Свитшоты, худи", "Блузки и рубашки", "Пиджаки и жакеты", "Платья и сарафаны", "Верхняя одежда"]
  },
  {
    text: ["МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ", "МУЖ"]
  },
  {
    text: ["ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ", "ДЕТ"]
  },
  {
    text: ["ОБ", "ОБ", "ОБ", "ОБ", "ОБ", "ОБ", "ОБ", "ОБ", "ОБ"]
  },
  {
    text: ["ИГР", "ИГР", "ИГР", "ИГР", "ИГР", "ИГР", "ИГР", "ИГР", "ИГР"]
  },
  {
    text: ["АКС", "АКС", "АКС", "АКС", "АКС", "АКС", "АКС", "АКС", "АКС"]
  },
  {
    text: ["БР", "БР", "БР", "БР", "БР", "БР", "БР", "БР", "БР"]
  },
  {
    text: ["ДОП", "ДОП", "ДОП", "ДОП", "ДОП", "ДОП", "ДОП", "ДОП", "ДОП"]
  },
  {
    text: ["АКЦ", "АКЦ", "АКЦ", "АКЦ", "АКЦ", "АКЦ", "АКЦ", "АКЦ"]
  }
]
function Menu() {

  const [showFirst, setShowFirst] = useState(false)
  const onClickFirst = () => { 
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(false)
    setShowFifth(false)
    setShowSixth(false)
    setShowSeventh(false)
    setShowEight(false)
    setShowNinth(false)
    setShowFirst(current => !current) }

  const [showSecond, setShowSecond] = useState(false)
  const onClickSecond = () => { 
    setShowFirst(false)
    setShowThird(false)
    setShowFourth(false)
    setShowFifth(false)
    setShowSixth(false)
    setShowSeventh(false)
    setShowEight(false)
    setShowNinth(false)
    setShowSecond(current => !current) }

  const [showThird, setShowThird] = useState(false)
  const onClickThird = () => { 
    setShowSecond(false)
    setShowFirst(false)
    setShowFourth(false)
    setShowFifth(false)
    setShowSixth(false)
    setShowSeventh(false)
    setShowEight(false)
    setShowNinth(false)
    setShowThird(current => !current) }

  const [showFourth, setShowFourth] = useState(false)
  const onClickFourth = () => { 
    setShowSecond(false)
    setShowThird(false)
    setShowFirst(false)
    setShowFifth(false)
    setShowSixth(false)
    setShowSeventh(false)
    setShowEight(false)
    setShowNinth(false)
    setShowFourth(current => !current) }

  const [showFifth, setShowFifth] = useState(false)
  const onClickFifth = () => { 
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(false)
    setShowFirst(false)
    setShowSixth(false)
    setShowSeventh(false)
    setShowEight(false)
    setShowNinth(false)
    setShowFifth(current => !current) }

  const [showSixth, setShowSixth] = useState(false)
  const onClickSixth = () => { 
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(false)
    setShowFifth(false)
    setShowFirst(false)
    setShowSeventh(false)
    setShowEight(false)
    setShowNinth(false)
    setShowSixth(current => !current) }

  const [showSeventh, setShowSeventh] = useState(false)
  const onClickSeventh = () => { 
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(false)
    setShowFifth(false)
    setShowSixth(false)
    setShowFirst(false)
    setShowEight(false)
    setShowNinth(false)
    setShowSeventh(current => !current) }

  const [showEight, setShowEight] = useState(false)
  const onClickEight = () => { 
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(false)
    setShowFifth(false)
    setShowSixth(false)
    setShowSeventh(false)
    setShowFirst(false)
    setShowNinth(false)
    setShowEight(current => !current) }

  const [showNinth, setShowNinth] = useState(false)
  const onClickNinth = () => { 
    setShowSecond(false)
    setShowThird(false)
    setShowFourth(false)
    setShowFifth(false)
    setShowSixth(false)
    setShowSeventh(false)
    setShowEight(false)
    setShowFirst(false)
    setShowNinth(current => !current) }
  return (
    <div className = {cl.root}>
        <img src = {LogoMenu} className = {cl.LogoMenu} alt = "picture" />
        <div className = {cl.menuCategories}>
            <p className = {cl.menuP} onClick = {onClickFirst}>Женщинам</p>
            { showFirst && <MenuAdditional data = 'Женщинам' array = {additionalMenu[0].text}/> }
            <p className = {cl.menuP} onClick = {onClickSecond}>Мужчинам</p>
            { showSecond && <MenuAdditional data = 'Мужчинам' array = {additionalMenu[1].text} />}
            <p className = {cl.menuP} onClick = {onClickThird}>Детям</p>
            { showThird && <MenuAdditional data = 'Детям' array = {additionalMenu[2].text} />}
            <p className = {cl.menuP} onClick = {onClickFourth}>Обувь</p>
            { showFourth && <MenuAdditional data = 'Обувь' array = {additionalMenu[3].text} />}
            <p className = {cl.menuP} onClick = {onClickFifth}>Игрушки</p>
            { showFifth && <MenuAdditional data = 'Игрушки' array = {additionalMenu[4].text} />}
            <p className = {cl.menuP} onClick = {onClickSixth}>Акссесуары</p>
            { showSixth && <MenuAdditional data = 'Акссесуары' array = {additionalMenu[5].text} />}
            <p className = {cl.menuP} onClick = {onClickSeventh}>Большие размеры</p>
            { showSeventh && <MenuAdditional data = 'Большие размеры' array = {additionalMenu[6].text} />}
            <p className = {cl.menuP} onClick = {onClickEight}>Дополнительно</p>
            { showEight && <MenuAdditional data = 'Дополнительно' array = {additionalMenu[7].text} />}
            <p className = {cl.menuP} onClick = {onClickNinth}>Акции</p>
            { showNinth && <MenuAdditional data = 'Акции' array = {additionalMenu[8].text} />}
        </div>
    </div>
  )
}

export default Menu;
