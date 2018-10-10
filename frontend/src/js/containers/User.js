import React, { Component } from 'react';

const request = require('superagent');


import Header from '../components/Header';
import Cover from '../components/Cover';
import Footer from '../components/Footer';



class User extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.params.userId)
    this.state = {id: this.props.params.userId};
  }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header
                        loggedIn={true}
                    />
                    <Cover />
                    <h1>{this.state.id}</h1>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}


module.exports = {
    User
};
