import styled from 'styled-components'
import {colors, fonts, spacing, transition, shadow} from './_var'


const TourCard = styled.div`
   transition: ${transition.$primary};
   background: red;
   box-shadow: ${shadow.$light};
   margin-bottom: 2rem;
   /* margin bottom not working */
`


export {TourCard}