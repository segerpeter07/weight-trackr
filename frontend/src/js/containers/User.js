import React, { Component } from 'react';

const request = require('superagent');


import Header from '../components/Header';
import Cover from '../components/Cover';
import Footer from '../components/Footer';



class User extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.params.uuid)
    this.state = {
        uuid: this.props.params.uuid,
        name: null,
    };

    request
            .get(`/api/users/${this.props.params.uuid}`)
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
        return (
            <div className="App">
                <div className="container">
                    <Header
                        loggedIn={true}
                    />
                    <Cover
                        name={this.state.id}
                    />
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
