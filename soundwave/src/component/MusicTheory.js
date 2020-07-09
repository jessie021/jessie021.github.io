
import React from 'react';
import { Container, Card, Button, Col, Row, Jumbotron, Image } from 'react-bootstrap';
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router-dom";


  
//Paragraph taken from   https://en.wikibooks.org/wiki/Music_Theory/Complete_List_of_Chord_Patterns , https://en.wikipedia.org/wiki/Scale_(music)
const MusicTheory = () => {

    const history = useHistory();
    const navigateTo = () => history.push('/SignUp');
   
    return(
      
    
        <div className = "App">

            <Jumbotron fluid fluid  style={{backgroundColor: "#ffc107"}}>
            <Container>
                <h1>Music Theory</h1>
                <p>
                Here you will learn the basics of Music theory.
                </p>
            </Container>
            </Jumbotron>

            <Container>
            <p>A Major <u><span data-tip data-for="scale" class= "text-primary ">scale</span></u> has 7 different notes and then ends back on 1, making a total of 8 notes. Each note in the scale is called a scale degree. Each scale degree represents a potential chord. The scale degrees are numbered with Roman numerals so that you can use upper and lower case letters. Upper case represents a Major chord, lower case are minor chords, and lower case with a little circle in the upper righthand corner of the Roman numeral is <u><span data-tip data-for="diminished" class= "text-primary ">diminished</span></u>. In western music chords are traditionally built by using every other note beginning on each scale degree - giving you a choice of 7 diatonic chords in a Major scale.</p>
            </Container>

            <ReactTooltip id="scale" place="top" effect="solid" type="info">
                A scale is any set of musical notes ordered by fundamental frequency or pitch.
            </ReactTooltip>

            <ReactTooltip id="diminished" place="top" effect="solid" type="info">
                Is a triad consisting of two minor thirds above the root.
            </ReactTooltip>

        
            <Container>

            <p>A Major scale has 7 different notes and then ends back on 1, making a total of 8 notes. Each note in the scale is called a scale degree. Each scale degree represents a potential chord. The scale degrees are numbered with Roman numerals so that you can use upper and lower case letters. Upper case represents a Major chord, lower case are minor chords, and lower case with a little circle in the upper righthand corner of the Roman numeral is diminished. In western music chords are traditionally built by using every other note beginning on each scale degree - giving you a choice of 7 diatonic chords in a Major scale.</p>
            </Container>

            <Image src="circle.png" rounded />


            <Container>

            <p>A Major scale has 7 different notes and then ends back on 1, making a total of 8 notes. Each note in the scale is called a scale degree. Each scale degree represents a potential chord. The scale degrees are numbered with Roman numerals so that you can use upper and lower case letters. Upper case represents a Major chord, lower case are minor chords, and lower case with a little circle in the upper righthand corner of the Roman numeral is diminished. In western music chords are traditionally built by using every other note beginning on each scale degree - giving you a choice of 7 diatonic chords in a Major scale.</p>
            </Container>



            <Container>
            <Row>
            <Col md={{ span: 4, offset: 8 }}>{}
            <Card>
            <Card.Header>Want To learn more?</Card.Header>
            <Card.Body>
                <Card.Title>Sign Up for our in Class Lessons</Card.Title>
                
                <Button variant="warning"  onClick= {navigateTo}>Sign Up for in Class Lessons</Button>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>

        </div>
    )
}


export default MusicTheory;