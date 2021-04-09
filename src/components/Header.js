import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from './Hero'


class Header extends Component {
 render() {
  return (
   <section className="home" id="home">
    
    <Hero />
   </section>
  )
 }
}

export default Header
