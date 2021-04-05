import React from 'react'
import styled from 'styled-components'
import {colors, spacing} from './utils/_var'
import {Btn} from './utils/Buttons'
import about from '../setup-files/images/about.jpeg'
import { SectionTitle } from './utils/Title'

const Wrapper = styled.section`
 padding: 5rem 0;
 line-height: 1.5;
 


 .title h2{
  text-transform: uppercase;
 }

 .title span{
  color: ${colors.$colorBg}
 }

 .center{
  width: 90vw;
  margin:0 auto;
  max-width: 1170px; 
 }

 img {
  width: 100%;
  display: block;
}

h1,h2,h3,h4 {
  letter-spacing: ${spacing.$letter} ;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

p {
  margin-bottom: 1.25rem;
  color: black;
}

@media(min-width:992px){
 .center{
  width: 95vw;
 }
}

.about-img, .about-info{
 margin-bottom:2rem;
}

@media(min-width: 992px){
 .center{
  display: flex; 
  justify-content: space-between;
  flex-wrap: wrap;
 }

 .about-img, .about-info{
  flex: 0 0 calc(50% - 2rem);
  margin-bottom: 0; 
  align-self: center;
 }
}

@media(min-width: 1170px){
 .about-img::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0.5rem solid ${colors.$colorBg};
  box-sizing: border-box;
  top: -1.5rem;
  left: -1.5rem;
  z-index: -1;
  }

 .about-img{
  position: relative;
 }
}
`

const About = () => {
 return (
  <Wrapper>
    <SectionTitle className="title">
     <h2>About <span>us</span></h2>
    </SectionTitle>

    <div className="center">
      {/* about image begin */}
      <article className="about-img">
       <img src={about} alt="awesome beach" className="about-photo"/>
      </article>
      {/* about image ends */}

      {/* about info */}
       <article className="about-info">
        <h3>Explore the Difference</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa excepturi, et a expedita hic quasi alias. Ipsa laborum qui earum?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit architecto ipsum quasi rerum facilis perferendis doloribus, veniam blanditiis. Officia, dolorem!</p>

        <Btn href="#">Read More</Btn>
       </article>
      {/* about info ends */}
    </div>
  </Wrapper>
 )
}

export default About
