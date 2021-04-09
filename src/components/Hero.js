import React, { Component } from 'react'

import styled from 'styled-components'

import {HeroBtn} from './utils/Buttons'
import {colors, spacing} from './utils/_var'

import main from '../setup-files/images/main.jpeg'

const Wrapper = styled.header`
 min-height: 100vh;
 background: ${colors.$colorBg};
 display: flex;
 justify-content: center;
 margin: 0;
 align-items: center;

 h1{
  letter-spacing: ${spacing.$letter};
  font-size: 3rem;
 }

 p{
 margin-bottom: 1.25rem;
 color: white;
 }

 .hero-banner{
  text-align: center;
  color: white;
  padding: 0 3rem;
 }

 .hero-banner h1{
  text-transform: uppercase;
 }

 .hero-banner p{
  max-width: 35rem;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: ${spacing.$letter}
 }

 @media(min-width:768px){
   background-image: url(${main});
   background-position: center;
   background-size: cover;
   background-color:rgba(61, 90, 128, 0.7);

   .overlay{
        width:100vw;
        height:100vh;
        background: rgba(61, 90, 128, 0.6);
        display: flex;
        justify-content: center;
        margin: 0;
        align-items: center;
    }

    .hero-banner{
     padding: 0; 
    }

    .hero-baner p {
     max-width: 45rem;
    }
  }
`

// linear-gradient(rgba(61, 90, 128, 0.7), rbga(0,0,0,0.7))

class Hero extends Component {
 render() {
  return (
   <Wrapper className="hero" >
    <div className="overlay">

     <div className="hero-banner">
      <h1>Continue Exploring</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis similique aliquam iusto, officia beatae?</p>

      <HeroBtn>
        <a href="#featured">explore tours</a>
       </HeroBtn>
     </div>
    </div>
   </Wrapper>
  )
 }
}

export default Hero
