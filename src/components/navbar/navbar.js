import React from 'react';
import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import {Container,Row} from 'styled-bootstrap-grid';
import {Section,Navvbar,Nav0,NavBrand,Img,Linkk} from './navbarStyle.js' 
const NNavbar = () =>{
    return(
        <Section d="navbar">
        <Container>
            <Navvbar expand="lg">
                
                <NavBrand><Img src="images/navbar/logo.png"/></NavBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav0 className="mr-auto">
                        <Linkk activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800}>Home</Linkk>
                        <Linkk activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={800}>About</Linkk>
                        <Linkk activeClass="active" to="features" spy={true} smooth={true} offset={-70} duration={800}>Features</Linkk>
                        <Linkk activeClass="active" to="blogs" spy={true} smooth={true} offset={-70} duration={800}>Blogs</Linkk>   
                        <Linkk activeClass="active" to="contacts" spy={true} smooth={true} offset={-70} duration={800}>Contacts</Linkk>    
 
                    </Nav0>
                    
                </Navbar.Collapse>
               
            </Navvbar>

            </Container>
       </Section>
    )

}

export default NNavbar;