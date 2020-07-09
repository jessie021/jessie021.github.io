import React from 'react';
import { Card, Button, Container, Col, Row, Jumbotron } from 'react-bootstrap';


const Teachers = () => {
    return(

        <div className = "App">

            <Jumbotron >
            <Container >
                <h1 class="text-dark"> Our Teachers</h1>
                <h5>Meet our Teachers!</h5>
            </Container>
            </Jumbotron>
           
            <Container >
            <Row>
            <Col>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="beyonce.png" />
            <Card.Body>
                <Card.Title>Beyonce</Card.Title>
                <Card.Text>
                Beyonce is a legendary vocalist and all around musician. She can take your music learning to the next level.
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="ed.png" />
            <Card.Body>
                <Card.Title>Ed sheeran</Card.Title>
                <Card.Text>
                Ed sheeran is a a singer-songwritter. He his a world wide sensation. He also play the guitar.
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="jimmy.png" />
            <Card.Body>
                <Card.Title>Jimmy Fox</Card.Title>
                <Card.Text>
                Jimmy Fox is a multi-talent individual. He can teach you about all the music genres. 
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="childish.png" />
            <Card.Body>
                <Card.Title>Childish Gambino</Card.Title>
                <Card.Text>
                Childish Gambino has a strange teaching method, but highly effective. A course with him would certainly take you to the next level.
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>

           
            </Row>
            </Container>
        </div>
    )
}

export default Teachers;