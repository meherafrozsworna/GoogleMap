import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class AddForm extends Component {
    state = {
        name: '',
        coords : `( ${this.props.lat} , ${this.props.lng} )`
    };

    onNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    onCoordsChange = (e) => {
        
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.hide();
        console.log('current coordinates(latitude, longitude) : '+this.state.coords)
        console.log('name : ' + this.state.name);
    };

    render() {
        return (
            <Form onSubmit={this.onSubmitForm}>
                <Form.Group controlId="coordinates">
                    <Form.Label>
                        Current Coordinates (latitude , longitude)
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={this.state.coords}
                        onChange={this.onCoordsChange}
                    />
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name "
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
