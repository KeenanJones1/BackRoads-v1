import './App.css';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

import styled from 'styled-components'
import {colors, fonts, spacing} from './components/utils/_var'

const Wrapper = styled.div`
font-family: ${fonts.$mainFont};
color: black;
line-height: 1.5;
font-size: 0.875rem;

a{
  text-decoration: none;
}
`
function App() {
  return (
    <Wrapper className="App">
      <Header />
      <About />
      <Services />
      <Tours />
      <Contact />
      <Gallery />
    </Wrapper>
  );
}

export default App;
