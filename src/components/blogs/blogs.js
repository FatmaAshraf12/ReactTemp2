import React,{useEffect} from 'react';
import {Section,H3,Item,H6,Img,P1,P,Desc,Div2,Button,Overlay,OverText,Test} from './blogStyle.js'
import Carousel from 'react-multi-carousel';
import Aos from 'aos'
import "aos/dist/aos.css"
import 'react-multi-carousel/lib/styles.css';

const Blogs =() =>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
     
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
    
    return(
        <Section id="blogs">
                <H3 data-aos="fade-in">Our Blogs</H3>
                
            

<Test data-aos="fade-in">
            <Carousel autoPlay={true} responsive={responsive} >
            <Item>
                        <Img src="images/blogs/1.jpg"/>
                        <Desc>
                            <H6>Lorem Ipsum is simply dummy text</H6>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </P>
                        </Desc>
                        
                    </Item>
                    <Item>
                        <Img src="images/blogs/2.jpg"/>
                        <Desc>
                            <H6>Lorem Ipsum is simply dummy text </H6>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </P>
                        </Desc>
                    </Item>
                    <Item>
                        <Img src="images/blogs/3.jpg"/>
                        <Desc>
                            <H6>Lorem Ipsum is simply dummy text </H6>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </P>
                        </Desc>                 
                    </Item>
                    <Item>
                        <Img src="images/blogs/4.jpg"/>
                        <Desc>
                            <H6>Far far away, behind the word mountains</H6>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </P>
                        </Desc>                    
                    </Item>
                    <Item>
                        <Img src="images/blogs/2.jpg"/>
                        <Desc>
                            <H6>Lorem Ipsum is simply dummy text </H6>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </P>
                        </Desc>
                    </Item>
                    <Item>
                        <Img src="images/blogs/1.jpg"/>
                        <Desc>
                            <H6>Lorem Ipsum is simply dummy text </H6>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </P>
                        </Desc>
                        
                    </Item>
            </Carousel>;
            </Test>
            <Div2>
                <Overlay>
                    <OverText data-aos="zoom-in">
                        <P1>Lorem Ipsum is simply dummy text of the printing and typesetting industry ,Lorem.</P1>
                        <Button>Join Us</Button>
                    </OverText>
                    
                </Overlay>

            </Div2>
        </Section>
    )
    

}

export default Blogs;