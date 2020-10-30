import React ,{useEffect}from 'react';
import {Container,Row} from 'styled-bootstrap-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos'
import "aos/dist/aos.css"
import { faAddressBook ,faBullseye ,faCubes} from '@fortawesome/free-solid-svg-icons'
import {Section,H3,Div,Item,I,H5,P,Hr,Table,Tr,Tr0,Td0,Td} from './featureStyle.js'

const Features =  () =>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <Section id="features">
            <Container>
                <H3 data-aos="fade-in" >Our Features</H3>
                    <Table data-aos="fade-in">
                        <Tr>
                            <Td><FontAwesomeIcon icon={faAddressBook} size="3x" color="#fff"/></Td>
                            <Td0>Web Design</Td0>
                            <Td><FontAwesomeIcon icon={faBullseye} size="3x" color="#fff"/></Td>
                        </Tr>
                        <Tr0>
                            <Td>Web Design</Td>
                            <Td0><FontAwesomeIcon icon={faCubes} size="3x" color="#fff"/></Td0>
                            <Td>Web Design</Td>
                        </Tr0>
                        <Tr>
                            <Td><FontAwesomeIcon icon={faBullseye} size="3x" color="#fff" /></Td>
                            <Td0>Web Design</Td0>
                            <Td><FontAwesomeIcon icon={faAddressBook} size="3x" color="#fff"/></Td>                        
                        </Tr>
                    </Table>
             
               
            </Container>


        </Section>
    )


}

export default Features;