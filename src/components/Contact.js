import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from './utils/Title'
import {colors, spacing, fonts, transition} from './utils/_var'


const Wrapper = styled.section`
  padding: 5rem 0;
  background:${colors.$colorLining};
  .contact-title{
   color: white;
  }
  .contact-title p{
   color: ${colors.$colorBtn};
  }

  .contact-form{
   display: flex;
   max-width: 28rem;

  }

  .form-control {
   flex: 1 1 auto;
   color: ${colors.$colorBg};
  }

  .form-control, .btn-submit{
   padding: 0.375rem 0.75rem; 
   font-size: 1rem;
   line-height: 1.5;
   font-weight: 300;
   letter-spacing: ${spacing.$letter};
   background: white;
   text-transform: capitalize;
   border: transparent;
  }

  .form-control::placeholder{
   color: inherit;
  }

  .btn-submit{
   font-family: ${fonts.$mainFont};
   margin-left: 0.8rem;
   background: ${colors.$colorBtn};
   color: ${colors.$colorBg};
   cursor: pointer;
   transition: ${transition.$primary};
  }

  .btn-submit:hover{
   background: ${colors.$colorBg};
   color: ${colors.$colorBtn};
  }

 .center{
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
 }

 @media(min-width: 992px){
  .center{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

  }

/* To avoid the default stretching effect */
  .contact-form{
   align-self: flex-start;
   /* stretching form across and change max-width */
   flex: 1 1 auto;
   max-width: 100%;
   padding-left: 2rem;
  }
 }
`

const Contact = () => {
 return (
  <Wrapper id="contact">
   <div className="center">
    <article className="contact-title">
     <h3>Want the latest tour info and updates</h3>
     <p>Sign up for newsletter and stay up to date</p>
    </article>

    <form className="contact-form">
     <input type="email" name="email" className="form-control" placeholder="your email"/>
     <button type="submit" className="btn-submit">Submit</button>
    </form>
   </div>
  </Wrapper>
 )
}

export default Contact
