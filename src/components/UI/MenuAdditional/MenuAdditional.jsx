import cl from './MenuAdditional.module.css';
import { useState } from 'react';

function MenuAdditional({data, array}) {
  const element = null
  const routeAdvistor = (e) => {
    localStorage.setItem('firstRoute', data)
    localStorage.setItem('secondRoute', e.target.innerText)
    window.location.href = '/catalog'
  }
  console.log(data);
  return (
    <div className = {cl.root}>
        <div className = {cl.menuCategories}>
            { array.map((elem, index) => {
                return (
                <p className = {cl.menuP} onClick = {e => routeAdvistor(e)}> {elem} </p>
                )
            }) }
        </div>
    </div>
  )
}

export default MenuAdditional;
