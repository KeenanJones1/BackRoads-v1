import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from './Hero'

const Wrapper = styled.header`

`

class Header extends Component {
 render() {
  return (
   <Wrapper className="home">
    
    <Hero />
   </Wrapper>
  )
 }
}

export default Header
