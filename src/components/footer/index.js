import React from 'react'
import { Link } from "gatsby"
import { footerLinksCols ,footerLinks , footerSection ,credit} from './footer.module.scss'

const footer = () => {
    return (
      <footer>
      <section className={footerSection}>
        <div>
        <div className={footerLinksCols}>
          <div className={footerLinks}> 
            <h2> Navigation</h2>
            <ul>
              <li><Link to="/"> Home</Link></li>
              <li><a> Portfolio</a></li> 
              <li><a> Contactez-moi !</a></li> 
              <li><Link to="/the_blog"> Mon blog</Link></li> 
            </ul>
               
            <a href="asset/media/CV2_Marvin_Mensah_Web.pdf" id="section3a3">MON CV</a> 
            
          </div>

          <div className={footerLinks}> 
            <h2> Contacts</h2>
            <ul>
              <li> <a href="asset/media/CV2_Marvin_Mensah_Web.pdf" id="section3a3">MON CV</a> </li>
              <li><a> Portfolio</a></li> 

            </ul>       
          </div>

          <div className={footerLinks}> 
            <h2> Autres</h2>
            <ul>
              <li> <a href="asset/media/CV2_Marvin_Mensah_Web.pdf" id="section3a3">MON CV</a> </li>
              <li><a> Portfolio</a></li> 

            </ul>       
          </div>
          
        </div>
     
        <div className={credit}>   <hr /> <a> Marvin Mensah © </a> </div>
        </div>
      
      </section>
    </footer>
    )
}



export default footer

