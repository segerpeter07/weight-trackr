import React from 'react';
import {
    Alert,
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col
} from 'reactstrap';
import { Link } from 'react-router';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          showPasswordRequirements: false,
        };
    }

    onActive = (event) => {
        this.setState({
            showPasswordRequirements: false
        });
    }

    passwordCheck = (event) => {
        this.setState({
            showPasswordRequirements: true
        });
      }
    
    render() {
        var PasswordRequirements;

        if(this.state.showPasswordRequirements) {
            PasswordRequirements = <Alert color="secondary">
                    Make sure your password meets our requirements:
                    <ul>
                        <li>At least 6 character: ashbcs</li>
                        <li>Contains at least 1 capital letter: Abs123a</li>
                        <li>Contains at least 1 special character: !#Abs123a</li>
                    </ul>
                </Alert>;
        }

        return (
          <div>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h1>Signup</h1>
                        <p>Fill out the form and we'll hook you up with an account.</p>
                        <Form>
                            <FormGroup>
                                <Label for="first_name">First Name</Label>
                                <Input type="name" name="name" id="first_name" onChange={this.onActive}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="last_name">Last Name</Label>
                                <Input type="name" name="name" id="last_name" onChange={this.onActive}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="email" onChange={this.onActive} placeholder="example@example.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="password" onChange={this.passwordCheck}/>
                            </FormGroup>
                            {PasswordRequirements}
                            <Button>Signup</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
          </div>
        );
    }
};
