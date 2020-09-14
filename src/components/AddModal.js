import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import AddForm from './AddForm';

export default class AddModal extends Component {
    render() {
        const divProps = Object.assign({}, this.props);
        delete divProps.mapCenter;
        return (
            <Modal
                {...divProps}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Your Current Location
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm lat={this.props.lat} lng = {this.props.lng} hide={this.props.onHide}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add_post } from '../action/PostAction';

class AddPost extends Component {
    state = {
        title: '',
        body: '',
    };

    titleHandle = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    descriptionHandle = (e) => {
        this.setState({
            body: e.target.value,
        });
    };
    submithandle = (e) => {
        e.preventDefault();
        this.props.add_post(this.state.title, this.state.body);

        this.setState({
            title: '',
            body: '',
        });
    };
    render() {
        return (
            <div className="container">
                <h3 className="center">ADD POST</h3>
                <form onSubmit={this.submithandle}>
                    <label>Title :</label>
                    <input
                        type="text"
                        onChange={this.titleHandle}
                        value={this.state.title}
                    />
                    <label>Description :</label>
                    <input
                        type="text"
                        onChange={this.descriptionHandle}
                        value={this.state.body}
                    />
                    <button className="btn grey">Add Post</button>
                </form>
            </div>
        );
    }
}


export default connect(null, mapDispatchToProps)(AddPost);

*/