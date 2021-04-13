import React, {useState} from 'react'
import styled from 'styled-components'
import {shadow, colors, transition, spacing} from './utils/_var'
import logo from '../setup-files/images/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faSquarespace} from '@fortawesome/free-brands-svg-icons'

import {Link, animateScroll as scroll} from 'react-scroll'

const Wrapper = styled.nav`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 background: white;
 box-shadow: ${shadow.$dark};
 z-index: 2;

 .nav-icons{
  display: none;
 }

 .nav-center{
  width: 100%;
  max-width: 1170px;
  margin:0 auto; 
 }

 .nav-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
 }

 .nav-toggle{
  background: transparent;
  border: transparent;
  font-size: 1.5rem;
  color: ${colors.$colorBg};
  cursor: pointer;
  transition:${transition.$primary};
 }

 .nav-toggle:hover{
  transform: scale(1.2);
 }

 .nav-link{
  display: block;
  padding: 1rem 2rem;
  text-transform: capitalize;
  letter-spacing: ${spacing.$letter};
  transition: ${transition.$primary};
  color: ${colors.$colorBg};
  cursor: pointer;
  font-size: 1rem;
 }

 .nav-link:hover{
  color: ${colors.$colorBtn};
  background: ${colors.$grey};
  padding-left: 2.25rem;
 }

 .nav-links{
   height: ${props => props.toggle === false ? '0' : '440px' };
   overflow: ${props => props.toggle === false ? 'hidden' : null};
   transition: ${transition.$primary};
 }

 @media(min-width: 992px){
   padding: 1rem 2rem;
   /* hide toggle button */
   .nav-toggle{
     display: none;
   }

   .nav-center{
     display: flex;
     justify-content: space-between;
     align-items: center;
     /* flex-wrap: wrap; */
   }

   .nav-links{
     height: auto;
     display: flex;
   }

   .nav-header{
     padding: 0 0;
   }

   .nav-link{
     padding: 0 0;
     margin-right: 0.7rem;
   }

   .nav-link:hover{
     padding: 0;
     color: ${colors.$colorBtn};
     background: transparent;
   }

   .nav-icons{
     display: flex;
     list-style: none
   }

   .nav-icon{
     margin-right: 0.7rem;
     color: ${colors.$colorBg};
     transition: ${transition.$primary};
   }

   .nav-icon:hover{
     color:${colors.$colorBtn};
   }
 }
`

const Navbar = () => {
 const [toggle, setToggle] = useState(false)

 const handleToggle = () => {
  setToggle(!toggle)
 }

 return (
  <Wrapper toggle={toggle}>
   <div className="nav-center">
    {/* nav header */}
    <div className="nav-header">
     <img src={logo} alt="" className="nav-logo"/>
     <button type="button" className="nav-toggle" id="nav-toggle" onClick={() => handleToggle()}>
      <FontAwesomeIcon icon={faBars}/>
     </button>
    </div>
    {/* end of nav header */}
    <ul className="nav-links">
    {/* start of nav link */}
    <li className="nav-link">
     <Link spy={true} smooth={true} offset={-70} duration={1200} to="home" className="nav-link scroll-lnk" onClick={() => handleToggle()}>
     home
     </Link>
    </li>
    {/* end of nav link */}
    {/* start of nav link */}
    <li className="nav-link">
     <Link spy={true} smooth={true} offset={-70} duration={1200} to="about" className="nav-link scroll-lnk" onClick={() => handleToggle()}>
     about
     </Link>
    </li>
    {/* end of nav link */}
    {/* start of nav link */}
    <li className="nav-link">
     <Link spy={true} smooth={true} offset={-70} duration={1200} to="services" className="nav-link scroll-lnk" onClick={() => handleToggle()}>
     services
     </Link>
    </li>
    {/* end of nav link */}
    {/* start of nav link */}
    <li className="nav-link">
     <Link spy={true} smooth={true} offset={-70} duration={1200} to="featured" className="nav-link scroll-lnk" onClick={() => handleToggle()}>
     featured
     </Link>
    </li>
    {/* end of nav link */}
    {/* start of nav link */}
    <li className="nav-link">
     <Link spy={true} smooth={true} offset={-70} duration={1200} to="gallery" className="nav-link scroll-lnk"  onClick={() => handleToggle()}>
     gallery
     </Link>
    </li>
    {/* end of footer link */}
   </ul>
    {/* end of footer links */}

   {/* nav icons start */}
   <ul className="nav-icons">
      {/* single icon */}
       <li>
        <a href="https://www.twitter.com" target="_blank" className="nav-icon">
         <FontAwesomeIcon icon={faTwitter}/>
        </a>
       </li>
      {/* single icon end */}
      {/* single icon */}
       <li>
        <a href="https://www.facebook.com" target="_blank" className="nav-icon">
         <FontAwesomeIcon icon={faFacebook}/>
        </a>
       </li>
      {/* single icon end */}
      {/* single icon */}
       <li>
        <a href="https://www.squarespace.com" target="_blank" className="nav-icon">
         <FontAwesomeIcon icon={faSquarespace}/>
        </a>
       </li>
      {/* single icon end */}
     </ul>
    {/* nav icons end */}
   </div>
  </Wrapper>
 )
}

export default Navbar
