import styled from 'styled-components'

export const HomeSection = styled.section`
    width:100%;
    height:auto;
    background-color:#065446;
    padding-top:50px;
    color:#fff;
    
`

export const Text = styled.div`
    width:39%;
    height:300px;
    margin-top:9%;
    @media (max-width: 768px) {
        width:80%;
        margin:auto;
      }

`




export const P = styled.p``
export const H3=styled.h3`
    font-weight:bold;
    font-size:42px;
    margin-bottom:20px;

`
export const Img = styled.img`
   width:400px;
   height:400px;
   @media (max-width: 768px) {
    width:80%;
    margin:auto;
  }

`
export const Div = styled.div`
display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`


export const Button = styled.button``

export const Input = styled.input``

export const Hero= styled.div`
position: relative;
    height: 10px;
    background-color:#065446;
    margin-top:50px;
`

export const Svg = styled.svg`
position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vw;
    fill: #fff;

`

export const Polygon = styled.polygon`

`