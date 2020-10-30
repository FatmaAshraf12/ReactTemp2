import styled from 'styled-components'
import {Navbar,Nav} from 'react-bootstrap'
import { Link } from "react-scroll";

export const Section = styled.section`
width:100%;
height:auto;
position:fixed;
z-index:999999;
background-color:#065446;

`
export const NavBrand = styled(Navbar)`
font-size:40px;
font-weight:900;
color:#ec524b;
`
export const Img = styled.img`
width:80%;
`
export const Navvbar = styled(Navbar)`

height:60px;
@media (max-width: 768px) {
   height:auto;

  }
color:#fff;
`
export const Nav0 = styled(Nav)`
margin-left:100px;
@media (max-width: 768px) {
    margin-left:20px;

  }
`

export const Linkk = styled(Link)`
    color:white;
    margin-right:30px;
    font-weight:500;
    list-style:none;
    &:active{
      color:#000;
    }
    &:visited{
      color:#000;
    }
    &:hover{
        cursor:pointer;
        color:#000;
        text-decoration:none;
       
    }
    @media (max-width: 768px) {
        margin-bottom:10px;
        font-weight:400;
     
       }

`


