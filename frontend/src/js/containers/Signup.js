import React, { Component } from 'react';



import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';



class Signup extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header
                        loggedIn={false}
                    />
                    <SignupForm/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}


module.exports = {
    Signup
};
