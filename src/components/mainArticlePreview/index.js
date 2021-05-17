import React from 'react'
import { mainArticlePreviewBox , blogPresentationTxt, imgContent, ArticleDetail, ArticleWrapper ,Articlh3Detail} from './mainArticlePreview.module.scss'
import Link from "gatsby-link"

const mainArticlePreview = ( {Atitle, Aimg, alink , tag , date}) => {
    return (

    <div className={blogPresentationTxt}>
        <h1> Le blog</h1>
        <p> Bienvenue sur mon blog ! Ici on parle de Design, de tech et bien autres !! </p>
        <div className={mainArticlePreviewBox} id="dcard">

           


       <div className={ArticleWrapper}>   
       
       <div className={imgContent}>
            <Link to={alink}>
                 <img src={Aimg} alt="" />    
            </Link>       
        </div>   

            <div className={ArticleDetail}> 
                <Link to={alink}> <h2>  {Atitle} </h2> </Link>
                <div className={Articlh3Detail}> 
                    <h3> {tag}  </h3>
                    <h3> {date} </h3>
                </div>
                <Link className="customButton"> Lire la suite</Link>
            </div>
            
        
        </div> 
        </div>

    </div>
      
    )
}



export default mainArticlePreview

