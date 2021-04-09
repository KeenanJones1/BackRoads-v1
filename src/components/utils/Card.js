import styled from 'styled-components'
import {colors, fonts, spacing, transition, shadow} from './_var'

// Didn't work with the Tour Wrapper component
const TourCard = styled.div`
   transition: ${transition.$primary};
   /* background: red; */
   box-shadow: ${shadow.$light};
   margin-bottom: 2rem;

   .tour-img-container{
      width: 100%;
   }

   img{
      width: 90%;
      display: block;
   }

   h1, h2, h3, h4 {
      letter-spacing: ${spacing.$letter};
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
   }
`


export {TourCard}