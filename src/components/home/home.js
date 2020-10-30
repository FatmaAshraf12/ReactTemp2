import React ,{useEffect} from 'react';
import {Container,Row} from 'styled-bootstrap-grid';
import Aos from 'aos'
import "aos/dist/aos.css"
import {HomeSection,Text,H3,P,Input,Img,Img1,Img2,Button,Hero,Polygon,Svg,Flowers,Div} from './homeStyle.js'

const Home = () =>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <HomeSection id="home" >
            <Div className="flex-container" >                 
            <Text data-aos="zoom-out">
                <H3>Welcome to XYZ</H3>
                <P>Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem Ipsum is simply</P>
            </Text>
                <Img data-aos="zoom-out" src="images/home/h.png" />
            </Div>  
            <Hero>
                <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <Polygon points="0,100 100,0 100,100" />
                </Svg>
            </Hero>

        </HomeSection>
    )



}

export default Home;
