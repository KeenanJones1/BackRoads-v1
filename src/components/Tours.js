import React from 'react'
import styled from 'styled-components'
import {colors, transition, shadow} from './utils/_var'
import {SectionTitle} from './utils/Title'
import {TourCard} from './utils/Card'

import Img1 from '../setup-files/images/tour-1.jpeg'
import Img2 from '../setup-files/images/tour-1.jpeg'
import Img3 from '../setup-files/images/tour-1.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMap } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.section`


`

const Tours = () => {
 return (
  <Wrapper id="featured">
   <SectionTitle className="title">
    <h2>Featured <span>Tours</span></h2>
   </SectionTitle>

   <div className="section-center featured-center">
     {/* single tour  */}
     <TourCard className="tour-card">
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
     </TourCard>
    {/* end of single tour  */}
     {/* single tour  */}
     <TourCard className="tour-card">
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
     </TourCard>
    {/* end of single tour  */}
     {/* single tour  */}
     <article className="tour-card">
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
     </article>
    {/* end of single tour  */}

     {/* single tour  */}
     <article className="tour-card">
      <div className="tour-img-container">
       <img src={Img3} alt="hilly town" className="tour-img"/>
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
     </article>
    {/* end of single tour  */}
   </div>
  </Wrapper>
 )
}

export default Tours
