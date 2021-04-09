import React from 'react'
import styled from 'styled-components'
import {colors, transition, shadow, spacing} from './utils/_var'
import {SectionTitle} from './utils/Title'
import {Btn} from './utils/Buttons'

import Img1 from '../setup-files/images/tour-1.jpeg'
import Img2 from '../setup-files/images/tour-2.jpeg'
import Img3 from '../setup-files/images/tour-3.jpeg'
import Img4 from '../setup-files/images/tour-4.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMap } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.section`
  padding: 5rem 0;
  line-height: 1.5;

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  .tour-card{
    margin-bottom: 2rem;
    box-shadow: ${shadow.$light};
    background-color: ${colors.$grey};
    transition: ${transition.$primary};
  }

  .tour-card:hover{
    box-shadow: ${shadow.$dark};
    transform: scale(1.02)
  }

  .tour-img-container{
      position: relative;
   }

   .tour-info {
    padding: 1.25rem 1.5rem;
  }


   .tour-img{
      width: 100%;
      height: 15rem;
      display: block;
      object-fit: cover;
   }

   .tour-date{
     position: absolute;
     right: 0;
     bottom: 0;
     background: ${colors.$colorLining};
     margin-bottom: 0;
     text-transform: capitalize;
     padding: 0.25rem 0.5rem;
   }

   .tour-info{
     padding: 1.25rem 1.5rem;
   }

   .tour-footer{
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;
     align-items: center;
   }

   .tour-footer p{
    line-height: 0;
    margin-bottom: 0;
    text-transform: capitalize;
    color: ${colors.$colorBtn}
   }



   .tour-btn{
     text-align: center;
     position: relative;
     left: 45%;
   }

   @media(min-width: 768px){
     .featured-center{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
     }

     .tour-card{
       flex: 0 0 calc(50% - 2rem);
     }
   }

   @media(min-width: 1170px){
    .tour-card{
      flex: 0 0 calc(33.33% - 2rem);
    }
   }
`




const Tours = () => {
 return (
  <Wrapper id="featured">
    <SectionTitle className="title">
      <h2>Featured <span>Tours</span></h2>
    </SectionTitle>
    <div className="section-center featured-center">
    {/* single tour  */}
    <div className="tour-card">
      <div className="tour-img-container">
      <img src={Img1} alt="hilly town" className="tour-img"/>
      <p className="tour-date">August 26th, 2021</p>
      </div>

      {/* Tour info start*/}
      <div className="tour-info">
        <h4>Tibet Adventure</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates architecto hic quos similique placeat. Nisi obcaecati error veniam, quis fuga, doloremque cupiditate, tempora aperiam dolores molestiae natus debitis.</p>
        <div className="tour-footer">
        <p>
          <span>
          <FontAwesomeIcon icon={faMap}/>
          China
          </span>
        </p>
        <p>6 Days </p>
        <p>from $2100</p>
        </div>
      </div>
      {/* Tour info end */}
    </div>
    {/* end of single tour  */}
    {/* single tour  */}
    <div className="tour-card">
      <div className="tour-img-container">
      <img src={Img2} alt="hilly town" className="tour-img"/>
      <p className="tour-date">October 11th, 2021</p>
      </div>

      {/* Tour info start*/}
      <div className="tour-info">
        <h4>Best of Java</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates architecto hic quos similique placeat. Nisi obcaecati error veniam, quis fuga, doloremque cupiditate, tempora aperiam dolores molestiae natus debitis.</p>
        <div className="tour-footer">
        <p>
          <span>
          <FontAwesomeIcon icon={faMap}/>
          Indonesia
          </span>
        </p>
        <p>11 Days </p>
        <p>from $1600</p>
        </div>
      </div>
      {/* Tour info end */}
    </div>
    {/* end of single tour  */}
    {/* single tour  */}
    <div className="tour-card">
      <div className="tour-img-container">
      <img src={Img3} alt="hilly town" className="tour-img"/>
      <p className="tour-date">September 20th, 2021</p>
      </div>

      {/* Tour info start*/}
      <div className="tour-info">
        <h4>Explore Hong Kong</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates architecto hic quos similique placeat. Nisi obcaecati error veniam, quis fuga, doloremque cupiditate, tempora aperiam dolores molestiae natus debitis.</p>
        <div className="tour-footer">
        <p>
          <span>
          <FontAwesomeIcon icon={faMap}/>
          Hong Kong
          </span>
        </p>
        <p>8 Days </p>
        <p>from $5000</p>
        </div>
      </div>
      {/* Tour info end */}
    </div>
    {/* end of single tour  */}

    {/* single tour  */}
    <div className="tour-card">
      <div className="tour-img-container">
      <img src={Img4} alt="hilly town" className="tour-img"/>
      <p className="tour-date">Decemeber 5th, 2021</p>
      </div>

      {/* Tour info start*/}
      <div className="tour-info">
        <h4>Kenya Highlights</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates architecto hic quos similique placeat. Nisi obcaecati error veniam, quis fuga, doloremque cupiditate, tempora aperiam dolores molestiae natus debitis.</p>
        <div className="tour-footer">
        <p>
          <span>
          <FontAwesomeIcon icon={faMap}/>
          Kenya
          </span>
        </p>
        <p>20 Days</p>
        <p>from $3300</p>
        </div>
      </div>
      {/* Tour info end */}
    </div>
    {/* end of single tour  */}
    </div>
    <Btn className="tour-btn">
      <a href="#" className="btn">All Tours</a>
    </Btn>
</Wrapper>
 )
}

export default Tours




