import * as React from "react"
import styled from 'styled-components';
import Icon from '../../images/logo berk.png'

const ItemHeaderBottom = styled.li`
    color:#707070;
    font-size: 1.2vw;
    &:hover{
    color:black;
    font-weight: bold;
    text-decoration: underline red;

`
const ListHeaderBottom = styled.ul`
    display:flex;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
    color:#707070;
`
const IntroBerk = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    flex-direction: column;
`
const Box = styled.div`
    width: 100%;
    border: solid 2px red; 
    display:flex;
    justify-content: space-around;
    align-items: center;
`
const List = styled.ul`
    display:flex;
    justify-content: space-evenly;
    width: 37%;
    list-style: none;
    color:#707070;
`
const Container = styled.div`
    width: 100%;
    border: solid 2px red;
`
const Item = styled.li`
    color:#707070;
    font-size: 1.2vw;
    &:hover{
    color:black;
    font-weight: bold;
}
`

const IndexHeader = () => {
  return (
    <Container>
      <Box>
        <img src={Icon} alt="logo berk" />
        <List>
          <Item>Portfólio+</Item>
          <Item>Sobre+</Item>
          <Item>Notícias+</Item>
          <Item>Contato+</Item>
        </List>
      </Box>
      <IntroBerk>
        <h1>Olá nos somos a BERK,</h1>
        <p>um estúdio de design gráfico multidisciplinar.</p>
        <p>Amamos direção de arte, gráficos em movimento, gráficos interativos e ilustração.</p>
      </IntroBerk>
      <ListHeaderBottom>
        <ItemHeaderBottom>Todos</ItemHeaderBottom>
        <ItemHeaderBottom>Gráficos</ItemHeaderBottom>
        <ItemHeaderBottom>Web</ItemHeaderBottom>
        <ItemHeaderBottom>Embalagens</ItemHeaderBottom>
        <ItemHeaderBottom>Marcas</ItemHeaderBottom>
      </ListHeaderBottom>
    </Container>

  )
}

export default IndexHeader
