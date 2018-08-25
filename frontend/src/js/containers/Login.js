import React, { Component } from 'react';



import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';



class Login extends Component {
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
        return (
            <div className="App">
                <div className="container">
                    <Header
                        loggedIn={false}
                    />
                    <LoginForm/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}


module.exports = {
    Login
};
