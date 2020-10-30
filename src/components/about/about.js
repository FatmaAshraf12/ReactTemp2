import React ,{ useEffect}from 'react';
import {Container,Row} from 'styled-bootstrap-grid';
import Aos from 'aos'
import "aos/dist/aos.css"
import {Section,H5,H3,Div,Text,H6,Img,Date,P,Button,Desc} from './aboutStyle.js'

const About = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <Section id="about">
            
            <H3 data-aos="fade-in">About Us</H3>
            <Div>
                <Img  data-aos="fade-left"src="images/about/1.png" />
                <Text data-aos="fade-right">
                    <H5>Lorem Ipsum is simply dummy text </H5>
                    <P>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem.</P>
                    <Button>Try Now</Button>
                </Text>
            </Div>
            <Div className="flex-container">
                <Text data-aos="fade-left">
                <H5>Lorem Ipsum is simply dummy text </H5>
                    <P>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem.</P>
                    <Button>Try Now</Button>
                </Text>
                <Img data-aos="fade-right"src="images/about/3.png" /> 
            </Div>
        </Section>
    )

}
export default About;
