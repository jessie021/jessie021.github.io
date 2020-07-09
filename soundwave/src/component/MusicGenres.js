
import React from 'react';
import { Card, Button, Container, Row, Col, Jumbotron , Accordion} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

// genre info taken from wike  https://en.wikipedia.org/wiki/Pop_music , https://en.wikipedia.org/wiki/Jazz , https://en.wikipedia.org/wiki/Soul_music, https://en.wikipedia.org/wiki/Electronic_dance_music
const MusicGenres = () => {

    const history = useHistory();
    const navigateTo = () => history.push('/SignUp');


    return(

        <div className = "App">
            
            <Jumbotron fluid  style={{backgroundColor: "#6c757d"}}>
            <Container >
                <h1 class="text-black" >Music Genres</h1>
                <p class="text-black" >
                Here you will learn the basics of note theory.
                </p>
            </Container>
            </Jumbotron>

            <Container >   
            <Row>
            <Col  >
            <Accordion  >
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <span class="text-light">Pop</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>According to Frith, characteristics of pop music include an aim of appealing to a general audience, rather than to a particular sub-culture or ideology, and an emphasis on craftsmanship rather than formal "artistic" qualities.[4] Music scholar Timothy Warner said it typically has an emphasis on recording, production, and technology, rather than live performance; a tendency to reflect existing trends rather than progressive developments; and aims to encourage dancing or uses dance-oriented rhythms.[14]</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            
            <Col >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <span class="text-light">Rap</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hip hop as both a musical genre and a culture was formed during the 1970s when block parties became increasingly popular in New York City, particularly among African-American youth residing in the Bronx. However hip-hop music did not get officially recorded for the radio or television to play until 1979, largely due to poverty during hip-hop's birth and lack of acceptance outside ghetto neighborhoods.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            

            <Col  >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <span class="text-light">Jazz</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Jazz is a music genre that originated in the African-American communities of New Orleans, United States,[1] in the late 19th and early 20th centuries, with its roots in blues and ragtime.[2][3] Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music, linked by the common bonds of African-American and European-American musical parentage.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            </Row>
            <span> &nbsp; </span>
            <span> &nbsp; </span>

            <Row>
            <Col >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    <span class="text-light">EDM</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Electronic dance music (EDM), also known as dance music, club music, or simply dance,[1] is a broad range of percussive electronic music genres made largely for nightclubs, raves and festivals. It is generally produced for playback by DJs who create seamless selections of tracks, called a mix, by segueing from one recording to another.[2] EDM producers also perform their music live in a concert or festival setting in what is sometimes called a live PA.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            
            <Col >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    <span class="text-light">Soul</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>Soul music (often referred to simply as soul) is a popular music genre that originated in the African American community throughout the United States in the 1950s and early 1960s. It combines elements of African-American gospel music, rhythm and blues and jazz. Soul music became popular for dancing and listening in the United States, where record labels such as Motown, Atlantic and Stax were influential during the Civil Rights Movement. Soul also became popular around the world, directly influencing rock music and the music of Africa.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            

            <Col  >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    <span class="text-light">Country</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>Country music, also known as country and western (or simply country), is a genre of popular music that takes its roots from genres such as blues and old-time music, and various types of American folk music including Appalachian, Cajun, and the cowboy Western music styles of Red Dirt, New Mexico, Texas country, and Tejano. Its popularized roots originate in the Southern United States of the early 1920s.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            </Row>
            </Container>

            <span> &nbsp; </span>
            <span> &nbsp; </span>



            <Container >   
            <Row>
            <Col  >
            <Accordion  >
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                    <span class="text-light">Reggea</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body>According to Frith, characteristics of pop music include an aim of appealing to a general audience, rather than to a particular sub-culture or ideology, and an emphasis on craftsmanship rather than formal "artistic" qualities.[4] Music scholar Timothy Warner said it typically has an emphasis on recording, production, and technology, rather than live performance; a tendency to reflect existing trends rather than progressive developments; and aims to encourage dancing or uses dance-oriented rhythms.[14]</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            
            <Col >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="8">
                    <span class="text-light">Hip Hop</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                    <Card.Body>Hip hop as both a musical genre and a culture was formed during the 1970s when block parties became increasingly popular in New York City, particularly among African-American youth residing in the Bronx. However hip-hop music did not get officially recorded for the radio or television to play until 1979, largely due to poverty during hip-hop's birth and lack of acceptance outside ghetto neighborhoods.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            

            <Col  >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="9">
                    <span class="text-light">Blues</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                    <Card.Body>Jazz is a music genre that originated in the African-American communities of New Orleans, United States,[1] in the late 19th and early 20th centuries, with its roots in blues and ragtime.[2][3] Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music, linked by the common bonds of African-American and European-American musical parentage.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            </Row>
            <span> &nbsp; </span>
            <span> &nbsp; </span>

            <Row>
            <Col >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="10">
                    <span class="text-light">Alternative</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body>Electronic dance music (EDM), also known as dance music, club music, or simply dance,[1] is a broad range of percussive electronic music genres made largely for nightclubs, raves and festivals. It is generally produced for playback by DJs who create seamless selections of tracks, called a mix, by segueing from one recording to another.[2] EDM producers also perform their music live in a concert or festival setting in what is sometimes called a live PA.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            
            <Col >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="11">
                    <span class="text-light">Metal</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="11">
                    <Card.Body>Soul music (often referred to simply as soul) is a popular music genre that originated in the African American community throughout the United States in the 1950s and early 1960s. It combines elements of African-American gospel music, rhythm and blues and jazz. Soul music became popular for dancing and listening in the United States, where record labels such as Motown, Atlantic and Stax were influential during the Civil Rights Movement. Soul also became popular around the world, directly influencing rock music and the music of Africa.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
           

            <Col  >
            <Accordion>
                <Card style={{backgroundColor: "#007bff"}}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="12">
                    <span class="text-light">Rock</span>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="12">
                    <Card.Body>Country music, also known as country and western (or simply country), is a genre of popular music that takes its roots from genres such as blues and old-time music, and various types of American folk music including Appalachian, Cajun, and the cowboy Western music styles of Red Dirt, New Mexico, Texas country, and Tejano. Its popularized roots originate in the Southern United States of the early 1920s.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
            </Row>
            </Container>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
           

            <Container>
            <Row >
            <Col md={{ span: 4, offset: 8 }}>{}
            <Card >
            <Card.Header>Want To learn more?</Card.Header>
            <Card.Body>
                <Card.Title>Sign Up for our in Class Lessons</Card.Title>
                
                <Button variant="warning"  onClick= {navigateTo} >Sign Up for in Class Lessons</Button>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>

        </div>
    )
}

export default MusicGenres;