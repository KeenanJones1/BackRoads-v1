import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {colors, transition} from './utils/_var'

import img1 from '../setup-files/images/tour-1.jpeg'
import img2 from '../setup-files/images/tour-2.jpeg'
import img3 from '../setup-files/images/tour-6.jpeg'
import img4 from '../setup-files/images/tour-5.jpeg'
import img5 from '../setup-files/images/tour-4.jpeg'
import img6 from '../setup-files/images/tour-3.jpeg'



const Wrapper = styled.section`
 padding: 5rem 0;
 img{
  width: 100%;
  display: block;
 } 

 .gallery-img-container{
  position: relative;
  background: ${colors.$colorLining}
 }

 .gallery-icon{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  cursor: pointer;
  transition: ${transition.$primary};
 }

 .gallery-img{
  height: 17rem;
  object-fit: cover;
  transition: ${transition.$primary};
 }

 .gallery-img-container:hover .gallery-img{
  opacity: 0.35;
 }

 .gallery-img-container:hover .gallery-icon{
  opacity: 1;
 }

 .center{
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
 }

 @media(min-width: 768px){
  .center{
   display: flex;
   flex-wrap: wrap;
  }

  .gallery-img-container{
   flex: 0 0 50%;
  }
 }

 
`

const Gallery = () => {
 return (
  <Wrapper id='gallery'>
   <div className="center">
    {/* single item */}
    <article className="gallery-img-container">
     <img src={img1} alt="" className="gallery-img"/>
     <a href="#" className="gallery-icon">
      <FontAwesomeIcon icon={faSearch}/>
     </a>
    </article>
    {/* single item end */}
    {/* single item */}
    <article className="gallery-img-container">
     <img src={img2} alt="" className="gallery-img"/>
     <a href="#" className="gallery-icon">
      <FontAwesomeIcon icon={faSearch}/>
     </a>
    </article>
    {/* single item end */}
    {/* single item */}
    <article className="gallery-img-container">
     <img src={img3} alt="" className="gallery-img"/>
     <a href="#" className="gallery-icon">
      <FontAwesomeIcon icon={faSearch}/>
     </a>
    </article>
    {/* single item end */}
    {/* single item */}
    <article className="gallery-img-container">
     <img src={img4} alt="" className="gallery-img"/>
     <a href="#" className="gallery-icon">
      <FontAwesomeIcon icon={faSearch}/>
     </a>
    </article>
    {/* single item end */}
    {/* single item */}
    <article className="gallery-img-container">
     <img src={img5} alt="" className="gallery-img"/>
     <a href="#" className="gallery-icon">
      <FontAwesomeIcon icon={faSearch}/>
     </a>
    </article>
    {/* single item end */}
    {/* single item */}
    <article className="gallery-img-container">
     <img src={img6} alt="" className="gallery-img"/>
     <a href="#" className="gallery-icon">
      <FontAwesomeIcon icon={faSearch}/>
     </a>
    </article>
    {/* single item end */}
   </div>
  </Wrapper>
 )
}

export default Gallery
