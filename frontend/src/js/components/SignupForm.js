import React from 'react';

const request = require('superagent');
var pbkdf2 = require('pbkdf2')

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
import { Link, Redirect, Route, Router, browserHistory } from 'react-router';
import {salt} from './../../../../constants/hash'
import {User} from './../containers/User';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          showPasswordRequirements: false,
          showSubmitButton: true,
          redirectRoute: null,
        };
    }


    onActive = (event) => {
        this.setState({
            showPasswordRequirements: false,
            showSubmitButton: true,
        });
    }

    passwordCheck = (event) => {

        request
            .post('/api/testPassword')
            .send({
                password: event.target.value
            })
            .then((res) => {
                if(res.text == "true") {
                    this.setState({
                        showPasswordRequirements: true,
                        showSubmitButton: false,
                    })
                } else {
                    this.setState({
                        showPasswordRequirements: false,
                        showSubmitButton: true,
                    })
                }
            })
    }

    submitForm = (event) => {
        event.preventDefault();

        let pw = event.target[3].value;
        var derivedKey = pbkdf2.pbkdf2Sync(pw, salt, 1, 12, 'sha512').toString('hex')
        console.log(derivedKey)

        request
            .post('/api/users/create')
            .send({
                firstName: event.target[0].value,
                lastName: event.target[1].value,
                email: event.target[2].value,
                password: derivedKey
            })
            .then((res) => {
                if(!res) {
                    console.log('Error creating new user');
                }
                const route = "/users/" + res.body;
                console.log(route);
                this.setState({
                    redirectRoute: route,
                })
            })
    }
    
    render() {
        var PasswordRequirements;
        var submitButton;

        if(this.state.redirectRoute != null) {
            console.log("HERE")
            return(
                <Router history={browserHistory}>
                    <Redirect from="/signup" to={this.state.redirectRoute}/>
                    <Route path='/users/:userId' component={User}/>
                </Router>
            );
        }

        if(this.state.showPasswordRequirements) {
            PasswordRequirements = <Alert color="success">
                    Make sure your password meets our requirements:
                    <ul>
                        <li>At least 6 character: ashbcs</li>
                        <li>Contains at least 1 capital letter: Abs123a</li>
                        <li>Contains at least 1 special character: !#Abs123a</li>
                    </ul>
                </Alert>;
        }

        if(this.state.showSubmitButton) {
            submitButton = <Button>Signup</Button>;
        }

        return (
          <div>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h1>Signup</h1>
                        <p>Fill out the form and we'll hook you up with an account.</p>
                        <Form onSubmit={this.submitForm}>
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
                            {submitButton}
                        </Form>
                    </Col>
                </Row>
            </Container>
          </div>
        );
    }
};
