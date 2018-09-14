import React, { Component } from 'react';



import Header from '../components/Header';
import Cover from '../components/Cover';
import Footer from '../components/Footer';



class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header
                        loggedIn={true}
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
