import styled from 'styled-components'

export const Section =  styled.section`

width:100%;
height:auto;
text-align:center;
padding-top:60px;

`

export const D = styled.div``
export const H=styled.h3``

export const Div =styled.div`
    display:flex;
    justify-content: space-around;
    margin-bottom:30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`

export const H3 = styled.h3`
  margin-bottom:30px;
`
export const P = styled.p`
font-size:14px;
color:rgb(43, 34, 34);
`
export const P1= styled(P)`
font-size:18px;
font-weight:700;
color:#fff;
margin-bottom:10px;
`
export const H6 = styled.h6`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight:600;`
export const Date= styled.div``
export const Img = styled.img`
width:100%;
height:200px;

`
export const Test=styled.div`
width:90%;
height:auto;
margin:auto;
`
export const Item = styled.div`
text-align:left;
width:90%;
height:auto;
background-color:#f9f7d9;
margin-bottom:40px;
margin-right:10px;
margin-left:10px;

`
export const Desc = styled.div`
width:100%;
heght:auto;
padding:5px 10px;
`

export const Div2 =styled.div`
width: 100%;
    height:350px;
    background: url("images/blogs/3.jpg");
    background-repeat: no-repeat;

    background-position: center center;
    background-size:cover;
    background-attachment:fixed;
    color:#000;
    margin-bottom:100px;
    position:relative;
`

export const Overlay = styled.div`
width:100%;
height:350px;
position:absolute;
top:0px;
left:0px;
background-color:rgba(6,84,70,0.5)
`

export const Button= styled.button`
background-color:#fff;
border:none;
padding:5px 25px;
color:#000;
font-weight:700;
&:hover{
    background-color:#fcf876;
    color:#000;
}
&:focus{
    outline:none;
}
`

export const OverText = styled.div`
  width:40%;
  font-size:20px;
  height:auto;
  margin:auto;
  margin-top:100px;
  color:#fff;
  @media (max-width: 768px) {
    width:80%;
  }
`

export const Icon = styled.div`
width:40px;
height:40px;
text-align:center;
border-radius:50%;
border:1px solid black;
padding-top:8px;
&:hover{
  background-color:black;
  color:#fff;
  cursor:pointer;
}
`