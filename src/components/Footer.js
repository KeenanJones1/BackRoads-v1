import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faSquarespace} from '@fortawesome/free-brands-svg-icons'
import {colors, transition, spacing} from './utils/_var'
import styled from 'styled-components'

const Wrapper = styled.footer`
  padding: 5rem 2rem;
  background: ${colors.$colorBg};
  color: ${colors.$grey};
  text-align: center;

  .footer-links, .footer-icons{
   display: flex;
   justify-content:center;
   margin-bottom: 1.5rem;
   flex-wrap: wrap;
  }

  .footer-link{
   text-transform: capitalize;
   font-size: 1rem;
   margin-right: 1rem;
   transition: ${transition.$primary};
  }

  .footer-link:hover{
   color: ${colors.$colorBtn};
  }

  .footer-icon{
   font-size: 2rem;
   margin-right: 1rem;
   transition: ${transition.$primary};
  }

  .footer-icon:hover{
   color: ${colors.$colorBtn};
  }

  a{
   text-decoration: none;
   color: inherit;
  }

  li{
   list-style-type: none;
  }

 p{
  color: ${colors.$grey};
 }

 .copyright{
  text-transform: capitalize;
  letter-spacing: ${spacing.$letter};
 }
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
        <a href="https://www.twitter.com" target="_blank" className="footer-icon">
         <FontAwesomeIcon icon={faTwitter}/>
        </a>
       </li>
      {/* single icon end */}
      {/* single icon */}
       <li>
        <a href="https://www.facebook.com" target="_blank" className="footer-icon">
         <FontAwesomeIcon icon={faFacebook}/>
        </a>
       </li>
      {/* single icon end */}
      {/* single icon */}
       <li>
        <a href="https://www.squarespace.com" target="_blank" className="footer-icon">
         <FontAwesomeIcon icon={faSquarespace}/>
        </a>
       </li>
      {/* single icon end */}
     </ul>
    {/* footer icons end */}
    <p className="copyright">
     copyright &copy; backroads travel tour company
     <span id="date"></span> all rights reserved
    </p>

  </Wrapper>
 )
}

export default Footer
