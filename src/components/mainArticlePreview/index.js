import React from 'react'
import { mainArticlePreviewBox , blogPresentationTxt, imgContent} from './mainArticlePreview.module.scss'

const mainArticlePreview = () => {
    return (
    <div className={blogPresentationTxt}>
        <h1> Le blog</h1>
    
        <div className={mainArticlePreviewBox} id="dcard">

            <p> Bienvenue sur mon blog ! Ici on parle de Design, de tech et bien autres !! </p>
        </div>

        <div className={imgContent}>   <img src="https://source.unsplash.com/random/800x400" alt="" /></div>
        <div> <h2> Qu'est-ce le design Thinking ?</h2> </div>
    </div>
      
    )
}



export default mainArticlePreview

