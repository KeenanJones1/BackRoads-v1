import styled from 'styled-components'
import {media} from './_media'
import {colors, fonts, spacing, transition} from './_var'

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  span{
  color: ${colors.$colorBg}
 }

 h2{
  text-transform: uppercase;
 }

`


export {SectionTitle}