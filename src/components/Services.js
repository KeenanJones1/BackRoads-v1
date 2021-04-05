import React from 'react'
import styled from 'styled-components'
import {colors, spacing} from './utils/_var'
import {SectionTitle} from './utils/Title'

const Wrapper = styled.section`

`

const Services = () => {
 return (
  <Wrapper id='services'>
   <SectionTitle clasName="title">
    <h3>Foobar</h3>
   </SectionTitle>
  </Wrapper>
 )
}

export default Services
