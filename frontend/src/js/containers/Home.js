import React, { Component } from 'react';

const request = require('superagent');


import Header from '../components/Header';
import Cover from '../components/Cover';
import Footer from '../components/Footer';



class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header
                        loggedIn={false}
                    />
                    <Cover />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}


module.exports = {
    Home
};
