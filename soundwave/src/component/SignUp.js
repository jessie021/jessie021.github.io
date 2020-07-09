
import React from 'react';
import { Form, Button, Container, Col, Jumbotron} from 'react-bootstrap';
import { useForm } from "react-hook-form";

function submitted(){
    alert("You are now enrolled! ");
}

const SignUp = () => {  

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return(
        
        <div className = "App bg-warning">
            <Jumbotron >
            <Container >
                <h1 class="text-dark">Sign Up for in Class Lessons</h1>
            </Container>
            </Jumbotron>

            <span> &nbsp; </span>
            <span> &nbsp; </span>

            <span> &nbsp; </span>
            <span> &nbsp; </span>

            <Form className = "container border-primary"  onSubmit={handleSubmit(onSubmit)} >
            <Container style={{border: '2px solid black'}} >
            <Form.Group  >
                <h3 style={{textAlign: "left"}} class="text-primary">STEP 1. Lesson Selection</h3>
                <Form.Label>Select which type of lesson you would like to sign up for.</Form.Label>
                <Form.Control as="select">
                <option>Music Theory</option>
                <option>Note Theory</option>
                <option>Music Genres</option>
                </Form.Control>
            </Form.Group>
            </Container>


            <span> &nbsp; </span>
            <span> &nbsp; </span>

            <span> &nbsp; </span>
            <span> &nbsp; </span>


            <Container style={{border: '2px solid black'}}>
            <Form.Group class = " border border-primary" controlId="exampleForm.ControlInput1">
                <h3 style={{textAlign: "left"}} class="text-primary">STEP 2. Personal Information</h3>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridPhone">
                    <Form.Label>Telephone</Form.Label>
                    <input class="form-control" type="tel" placeholder="Mobile number" name="Mobilenumber" ref={register({required: true, minLength: 6, maxLength: 12, pattern:{
                        value: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/ 
                        
                    }})} />
                    {errors.Mobilenumber && errors.Mobilenumber.type === "required" && (<p style={{ color: "red" }}>Phone number required</p>)}
                    {errors.Mobilenumber && errors.Mobilenumber.type === "pattern" && (<p style={{ color: "red" }}>Invalid Phone Format</p>)}
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address</Form.Label>
                    
                    <Form.Control placeholder="123 Apple ave" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Province</Form.Label>
                    <Form.Control as="select" value="Choose...">
                        <option>AB</option>
                        <option>BC</option>
                        <option>MB</option>
                        <option>NB</option>
                        <option>NL</option>
                        <option>NT</option>
                        <option>NS</option>
                        <option>NU</option>
                        <option>ON</option>
                        
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPostal">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

            </Form.Group>
            </Container>

            <span> &nbsp; </span>
            <span> &nbsp; </span>

            <span> &nbsp; </span>
            <span> &nbsp; </span>

            <Container style={{border: '2px solid black'}}>  <h3 style={{textAlign: "left"}} class="text-primary">STEP 3. Payment Information</h3>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridCarnNumber">
                <Form.Label>Name on Card</Form.Label>
                    <Form.Control type="text" placeholder="James Doe" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTypeCard">
                    <Form.Label>Type of Card</Form.Label>
                        <Form.Control as="select">
                        <option>Credit</option>
                        <option>Debit</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridCredit">
                    <Form.Label>CardNumber</Form.Label>
                    <Form.Control type="text" placeholder="1111 1111 1111 1111" />
                </Form.Group>
                
            </Container>

            <span> &nbsp; </span>
            <span> &nbsp; </span>
            
 
            <Container style={{border: '2px solid black'}}>
            
            <h3 style={{textAlign: "left"}} class="text-primary">STEP 4. Enroll</h3>
            <Button variant="primary" type="submit" onClick={submitted}>
                Enroll
            </Button>
            <p>We hope you enjoy the course.</p>
            <span> &nbsp; </span>
            
            </Container>
            
            </Form>

            <span> &nbsp; </span>
            <span> &nbsp; </span>

           
        </div>
    )
}

export default SignUp;