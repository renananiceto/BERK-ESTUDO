import * as React from "react"
import styled from 'styled-components';

const Container = styled.footer`
    background:blue;
`
const Teste = styled.div`
    width: 100px;
    height: 100px;
`

const IndexFooter = () => {
  return (
    <Container>
    
      <title>Ola </title>
      <Teste />
      
    </Container>
  )
}

export default IndexFooter
