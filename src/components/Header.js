import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Hero from './Hero'


class Header extends Component {
 render() {
  return (
   <section className="home" id="home">
    <Navbar />
    <Hero />
   </section>
  )
 }
}

export default Header
