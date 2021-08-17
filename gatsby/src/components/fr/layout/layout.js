import React from "react"
import { Normalize } from "../../styles/Normalize"
import { GlobalStyle } from "../../styles/GlobalStyle"
import Header from './header'
import Footer from "./footer"
import styled from "styled-components"



function Layout({ children }) {

  
  return (
    <Container>
      <Normalize />
      <GlobalStyle />
      <Header/>
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  border: solid 1px black;
`


export default Layout