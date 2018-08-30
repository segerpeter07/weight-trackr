import React from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Alert
} from 'reactstrap';
import { Link } from 'react-router';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          flashWrongPassword: false,
        };
    }

    userCheck = (event) => {
        this.setState({
            flashWrongPassword: true,
        });
      }


    render() {
        var WrongPassword; 

        if(this.state.flashWrongPassword) {
            WrongPassword = <Alert color="danger">
                Wrong username or password. Try again.
            </Alert>;
        }

        return (
          <div>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h1>Login</h1>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword"/>
                            </FormGroup>
                            {WrongPassword}
                            <Button onClick={this.userCheck}>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
          </div>
        );
    }
};
