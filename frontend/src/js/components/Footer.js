import React from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';


var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    margin: "auto",
    bottom: "20px",
    height: "40px",
    width: "100%",
}


export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div style={style}>
                    <p>&copy;2018 <a href="/">Weight Trackr</a></p>
                </div>
             </div>
        );
    }
};
