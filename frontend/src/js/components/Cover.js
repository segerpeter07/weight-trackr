import React from 'react';
import {
    Container,
    Jumbotron,
    Button } from 'reactstrap';
import { Link } from 'react-router';

export default class Cover extends React.Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Welcome!</h1>
                <p className="lead">Weight Trackr is a simple tracking app that allows you to track your weights and get a nice visualization of your progress.</p>
                <p className="lead">Nothing more. Nothing less.</p>
                <Link href='/login' id="login"><Button outline color="success" size="lg" id="login">Login</Button></Link>
              </Container>
            </Jumbotron>
          </div>
        );
    }
};
