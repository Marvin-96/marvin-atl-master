import React, { Component } from 'react'
import PropTypes from "prop-types"
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children }) => 

    {

        return (
            <>
   
            <Navbar></Navbar>
                {children}
            <Footer></Footer>
   
            </>
        )
    }

Main.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Main
  