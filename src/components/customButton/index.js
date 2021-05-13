import React, { Component } from 'react'
import PropTypes from "prop-types"
import Link from "gatsby"
import { customButtonStyle } from './customButton.module.scss'


const customButton = ({ children , path }) => 
    {
        return (
            <Link to={path} className={customButtonStyle}>
        
            
                {children}
        
            </Link>
        )
    }

customButton.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default customButton
  