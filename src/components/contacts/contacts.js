import React , {useEffect} from 'react';
import {Container,Row} from 'styled-bootstrap-grid';
import Aos from 'aos'
import "aos/dist/aos.css"
import {Section,Div,Img,P,Br,First,Second,Third,Fourth,H5,Icons} from './contactStyle.js'

const Contacts =()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <Section id="contacts">
            <Container>
            <Div data-aos="fade-in">
                <First>
                    <H5>About XYZ</H5>
                    <P>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum.</P>
                </First>

                <Second>
                    <H5>Projects</H5>
                    <P>Web Design</P>
                    <P>html5 , css3</P>
                    <P>Js , jQuery</P>
                    <P>bootstrap</P>
                    <P>React.js</P>
                </Second>

                <Third>
                    <H5>Gallery</H5>
                    <Img src="images/blogs/1.jpg"/>
                    <Img src="images/blogs/2.jpg"/>
                    <Img src="images/blogs/3.jpg"/>
                    <Img src="images/blogs/4.jpg"/>
                   
                </Third>

                <Fourth>
                    <H5>Contact</H5>
                    <P>+012345678</P>
                    <P>+011111111</P>
                    <P>fatma_ashraf12@yahoo.com</P>
                </Fourth>

            </Div>
            </Container>
        </Section>

    )
}

export default Contacts;