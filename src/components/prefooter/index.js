import React from 'react'
import { prefooterSection} from './prefooter.module.scss'

const prefooter = () => {
    return (
      <section className={prefooterSection}n>
      <div className="content">
        <ul>
          <li>   <a href="mailto:mensahmarvin95@gmail.com" id="section3a">ECHANGER </a> </li>
          <li id="section3Li"> <a href="https://linkedin.com/in/marvin-mensah-75b774160" id="section3a1"> CONNECTER </a></li>
          <li id="section3Li"> <a href="https://github.com/Marvin-96/"> DECOUVRIR</a></li> 
        </ul>
      </div>
    </section>
    )
}



export default prefooter

