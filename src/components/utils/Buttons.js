import styled from 'styled-components'
import {media} from './_media'
import {colors, fonts, spacing, transition} from './_var'

const HeroBtn = styled.button`
  text-transform: uppercase;
  background:${colors.$colorBtn};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${spacing.$letter};
  display: inline-block;
  font-weight: 700;
  transition: ${transition.$primary};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 0.9rem 1.6rem;
  font-size: 1.25rem;
  background: ${colors.$colorBtn};
  text-decoration: none;
  color: white;

  &:hover{
   background: transparent;
   color: white;
   border-color: white;
  }
`

const Btn = styled.button`
  text-transform: uppercase;
  background: ${colors.$colorBtn};
  color: white;
  padding: 0.375rem 0.75rem;
  letter-spacing: ${spacing.$letter};
  display: inline-block;
  font-weight: 700;
  transition: ${transition.$primary};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`




export {HeroBtn, Btn}