import React from "react"
import { Link } from "gatsby"
import { menu ,homeBtn ,logo, rightmenu,upLinkBtn, downLinkBtn} from './navbar.module.scss'
import Logo from "../../images/logo.png"
import ThemeSwitcher from '../themeSwitcher'
import BurgerBtn from '../burgerBtn'
import '../../styles/global.scss'


const navbar = () =>  {



  return (


            <nav className={menu}>
              <Link to="/" className={homeBtn} id="homeLi">
                <img className={logo} src={Logo} alt="logo" />
              </Link>
             
                <div className={rightmenu} id="rightMenu">
              
                  <ul className={upLinkBtn} id="upLinkBtn">
                    <Link to="/"><li id="homeLi"> Home</li> </Link>
                    <Link to="/#portfolio"> <li id="portfolioLi"> Portfolio</li> </Link><a href />
                    <Link to="/#contact">  <li id="contactLi"> Contactez-moi !</li> </Link>
                    <Link to="/the_blog">  <li id="contactLi"> Mon blog</li> </Link>
                
                    <div className={downLinkBtn}> 
                  <ThemeSwitcher></ThemeSwitcher>
                  </div> 
                  </ul>
                  
                  <BurgerBtn /> 

                 
                </div>
   
            </nav>

)}

export default navbar