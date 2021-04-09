import React from 'react'
import styled from 'styled-components'
import {colors, spacing} from './utils/_var'
import {SectionTitle} from './utils/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faWallet, faTree, faSocks} from '@fortawesome/free-solid-svg-icons'


const Wrapper = styled.section`
 padding: 5rem 0;
 line-height: 1.5;
 background: ${colors.$grey};
 
 .service{
  text-align: center;
  margin-bottom: 3rem;
 }

 .service-icon{
  background: ${colors.$colorBtn};
  color: ${colors.$colorBg};
  display: inline-block;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
 }

 .service-text{
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
 }

  @media(min-width: 576px){
   .services-center{
    display: flex;
    justify-content: space-between; 
    flex-wrap: wrap;
   }

   .service{
    flex: 0 0 calc(50% - 1rem);
    margin-bottom: 1rem;
   }
  }

  @media(min-width: 992px){
   .service{
    flex: 0 0 calc(33.33% - 1rem);
    margin-bottom: 1rem;
   }
  }

  @media(min-width: 1170px){
   .service{
    display: flex; 
    text-align: left;
   }

   .service-icon{
    align-self: flex-start;
   }

   .service-info{
    padding-left: 1rem;
   }

   .service-title{
    margin-bottom: 0.5rem;
   }
  }
`

const Services = () => {
 return (
  <Wrapper className='services' id='services'>
   <SectionTitle>
    <h2>Our <span>Services</span></h2> 
   </SectionTitle>

   <div className="section-center services-center">
    {/* single service */}
    <article className="service">
     <span className="service-icon">
     <FontAwesomeIcon icon={faWallet} />
     </span>
     <div className="service-info">
      <h4 className="service-title">
       Saving Money
      </h4>
      <p className="service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga beatae! Omnis repellendus fugit mollitia!</p>
     </div>
    </article>
    {/* end single service */}
   
    {/* single service */}
    <article className="service">
     <span className="service-icon">
     <FontAwesomeIcon icon={faTree} />
     </span>
     <div className="service-info">
      <h4 className="service-title">
       Endless Biking
      </h4>
      <p className="service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga beatae! Omnis repellendus fugit mollitia!</p>
     </div>
    </article>
    {/* end single service */}

    {/* single service */}
    <article className="service">
     <span className="service-icon">
     <FontAwesomeIcon icon={faSocks} />
     </span>
     <div className="service-info">
      <h4 className="service-title">
       Amazing Comfort
      </h4>
      <p className="service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga beatae! Omnis repellendus fugit mollitia!</p>
     </div>
    </article>
    {/* end single service */}
   
   </div>
  </Wrapper>
 )
}

export default Services
