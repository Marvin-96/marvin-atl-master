import React , {useState} from "react"
import {burgerBtn, close , open} from './burgerBtn.module.scss'
import'./burgerBtn.module.scss'
import '../../styles/global.scss'


const BurgerBtn = () =>  {

const [state, setState] = useState('close');

function openBurger() {
const links = document.querySelector("#rightMenu");
setState(state === 'open' ? 'close' : 'open')
links.classList.toggle('show-links'); 
}

    return(
        <button role="button" onClick={openBurger} className={burgerBtn}>
            <span className={state}></span>
            <span className={state}></span>
            <span className={state}></span>
        </button>
    );
}


export default BurgerBtn