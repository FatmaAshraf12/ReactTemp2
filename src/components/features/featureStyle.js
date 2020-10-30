import styled from 'styled-components'

export const Section = styled.section`
    width:100%;
    height:auto;
text-align:center;
background-color:#519872;
padding-bottom:50px;
padding-top:30px;
`

export const H3 = styled.h3`
color:#065446;
margin-bottom:50px;
`

export const Div = styled.div`
width:100%;
height:auto;
    display:flex;
    justify-content: space-around;
    margin-bottom:30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`
export const Item = styled.div`
width:280px;
height:auto;
background-color:#fff;
border-radius:5px;
padding:10px 20px;
@media (max-width: 768px) {
    margin:auto;
    text-align:center;
    margin-bottom:20px;
  }
`

export const Hr = styled.hr`
  width:40%;
  background-color:rgb(88, 24, 69);
  margin-bottom:10px;
  margin-top:0px;


`
export const I = styled.i``
export const H5 = styled.h5`
  margin-top:10px;
`
export const P = styled.p`
  font-size:14px;
`

export const Table= styled.table`
width:70%;
height:auto;
margin:auto;
color:#fff;

`

export const Tr = styled.tr`


`

export const Td= styled.td`
padding:40px 20px;
font-weight:400;
`
export const Tr0 = styled.tr`
border-top:2px solid #065446;
border-bottom:2px solid #065446;
`

export const Td0 =styled(Td)`
border-right:2px solid #065446;
border-left:2px solid #065446;
`
