import React from 'react'
import { postPrev, customButton } from './postPreview.module.scss'
import { Link } from "gatsby"

const postPreview = (thekey, thetitle) => {
    return (
      <div className={postPrev}  key={thekey}>
      <img className="img" src="https://source.unsplash.com/random/300x200" /> 
      <h3> {thetitle}</h3>
      <h5>zdqdqz</h5>
      <h5>2020-23-3</h5>
      <Link className={customButton} to=""> Lire la suite</Link>

  </div>
    )
}



export default postPreview

