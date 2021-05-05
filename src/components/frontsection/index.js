import React from 'react'
import { dcard ,trigger ,card, frame , frontText, frontH1mobile} from './frontsection.module.scss'

const frontSection = () => {
    return (
        <div className={dcard} id="dcard">
        <div className={trigger} />
        <div className={trigger} />
        <div className={trigger} />
        <div className={trigger} />
        <div className={trigger} />
        <div className={trigger} />
        <div className={card}>
          <div className={frame}> 
            <a>  
              <img src="https://source.unsplash.com/random/300x400" alt="" />
              <img src="https://source.unsplash.com/random/800x600" alt="" />
              <img src="https://source.unsplash.com/random/800x600" alt="" />
            </a>
          </div>
        </div>
        <div className={frontText}>
          <h1 data-scroll data-scroll-speed={3}> Marvin <br className={frontH1mobile} />  Mensah. <br />
            Je suis <br /> Front-End <br />
            developper et <br />
            Webdesigner </h1>
        </div>
      </div>
    )
}



export default frontSection

