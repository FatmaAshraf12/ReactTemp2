import React from 'react';
import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import {Container,Row} from 'styled-bootstrap-grid';
import {Section,Navvbar,Nav0,NavBrand,Img,Linkk} from './navbarStyle.js' 
const NNavbar = () =>{
    return(
        <Section d="navbar">
        <Container>
            <Navvbar expand="lg">
                
                <NavBrand>XYZ</NavBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav0 className="mr-auto">
                        <Linkk activeClass="active" to="home">Home</Linkk>
                        <Linkk activeClass="active" to="about" >About</Linkk>
                        <Linkk activeClass="active" to="features" >Features</Linkk>
                        <Linkk activeClass="active" to="blogs" >Blogs</Linkk>   
                        <Linkk activeClass="active" to="contacts" >Contacts</Linkk>    
 
                    </Nav0>
                    
                </Navbar.Collapse>
               
            </Navvbar>

            </Container>
       </Section>
    )

}

export default NNavbar;