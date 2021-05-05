import React, { Component } from 'react'
import PropTypes from "prop-types"
import { centerContent } from './content.module.scss'


const content = ({ children }) => 
    {
        return (
            <div className={centerContent}>
        
            
                {children}
        
            </div>
        )
    }

content.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default content
  