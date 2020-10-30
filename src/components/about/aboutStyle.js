import styled from 'styled-components'

export const Section = styled.section`
    width:100%;
    height:auto;
    padding-top:30px;


`
export const H5 = styled.h5`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight:600;

`
export const Div =styled.div`
width:100%;
height:auto;
    display:flex;
    justify-content: space-around;
    flex-directon:row;

    margin-bottom:60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Text= styled.div`
width:30%;
height:auto;

@media (max-width: 768px) {
    width:80%;
    margin:auto;
  }
`
export const H6 = styled.h6`
  font-size:12px;
  color:grey;
  font-weight:0;
  font-family: 'Courier New', Courier, monospace;
`
export const H3 = styled.h3`
  text-align:center;
  margin-bottom:70px;
`

export const Img = styled.img`
  width:40%;
  height:300px;
  @media (max-width: 768px) {
    width:80%;
    margin:auto;
  }
 
`
export const Date = styled.div``
export const P  =styled.p`
font-size:14px;
color:rgb(43, 34, 34);
`

export const Button  =styled.button`
  background-color:#065446;
  color:#fff;
  font-weight:600;
  border:none;
  padding:5px 25px;
 
&:hover{
    background-color:#fcf876;
    color:#000;
}
&:focus{
    outline:none;
}
`

export const Desc =styled.div``