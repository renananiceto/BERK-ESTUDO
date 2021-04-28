import { MainImage } from "gatsby-plugin-image";
import * as React from "react"
import styled from 'styled-components';
import BuzzImg from '../../images/buzz embalagem.png'
import PixarGrafic from '../../images/pixar grafic.png'
import Anger from '../../images/47c92829219915.55e80ae7d679a.png'
import BallOfLan from '../../images/purfeature.png'
import PixarEmbalag from '../../images/pixa embala.png'
import PixarPoster from '../../images/pixar poster.png'


const BoxImg = styled.div`
    
`
const Container = styled.div`
    background-color: #B4F8F7;
    width: 100%;
    display: flex;
    justify-content: center;
`
const IndexMain = () => {
    return (
        <Container>
            <BoxImg>
                <img src={BuzzImg} alt="embalagem buzz" />
                <img src={PixarGrafic} alt="figura de uma arte" />
                <img src={Anger} alt="arte abstrata" />
                <img src={BallOfLan} alt="novelo de lan" />
                <img src={PixarEmbalag} alt="figura de uma embalagem" />
                <img src={PixarPoster} alt="poster filme mostros" />
            </BoxImg>
        </Container>
    )
}

export default IndexMain