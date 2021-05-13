import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Navbar from '../navbar'
import Footer from '../footer'
// import LocomotiveScroll from 'locomotive-scroll';



const Layout = ({ children }) =>

    {        
        
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
        return (
            <>
             <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Kulim+Park&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Syncopate:700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"/>
          
            <div data-scroll-container  id="themeSwitcher" class="dark-theme">
        
                {children}
             
            </div>
            </>
        )
    }
//     function knowThetheme() {
//     let thetheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-theme';
//     // document.getElementById('themeSwitcher').className = thetheme
//     return thetheme
// }  
// knowThetheme()
// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
//   }
  
  export default Layout