import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {colors} from './utils/_var'
import styled from 'styled-components'

const Wrapper = styled.footer`
  padding: 5rem 0;
  background: ;

`

const Footer = () => {
 return (
  <Wrapper>
   <ul className="footer-links">
    {/* start of footer link */}
    <li className="footer-link">
     <a href="#home" className="footer-link scroll-lnk">
     home
     </a>
    </li>
    {/* end of footer link */}
    {/* start of footer link */}
    <li className="footer-link">
     <a href="#about" className="footer-link scroll-lnk">
     about
     </a>
    </li>
    {/* end of footer link */}
    {/* start of footer link */}
    <li className="footer-link">
     <a href="#services" className="footer-link scroll-lnk">
     services
     </a>
    </li>
    {/* end of footer link */}
    {/* start of footer link */}
    <li className="footer-link">
     <a href="#featured" className="footer-link scroll-lnk">
     featured
     </a>
    </li>
    {/* end of footer link */}
    {/* start of footer link */}
    <li className="footer-link">
     <a href="#gallery" className="footer-link scroll-lnk">
     gallery
     </a>
    </li>
    {/* end of footer link */}
   </ul>
    {/* end of footer links */}

    {/* footer icons */}
     <ul className="footer-icons">
      {/* single icon */}
       <li>
        <a href=""></a>
       </li>
      {/* single icon end */}
     </ul>
    {/* footer icons end */}
  </Wrapper>
 )
}

export default Footer
