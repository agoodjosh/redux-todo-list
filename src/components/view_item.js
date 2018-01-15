import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleItem, deleteSingleItem } from '../actions';


class ViewItem extends Component {
    constructor(props) {
        super(props);

        this.formatTime = this.formatTime.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount() {
        this.props.getSingleItem(this.props.match.params.id);
    }

    formatTime(time) {
        let milliseconds = parseInt((time % 1000) / 100)
            , seconds = parseInt((time / 1000) % 60)
            , minutes = parseInt((time / (1000 * 60)) % 60)
            , hours = parseInt((time / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    deleteItem() {
        this.props.deleteSingleItem(this.props.single._id).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        console.log('View Items Props:', this.props);

        if (!this.props.single) {
            return null;
        }

        return (
            <div>
                <div className="row my-4 justify-content-end">
                    <Link className="btn btn-outline-primary" to='/'>Back</Link>
                </div>
                <h1 className="text-center">View Item: {this.props.single.title}</h1>
                <h4 className="text-center">Details: {this.props.single.details}</h4>
                <h5 className="text-center">Created: {this.formatTime(this.props.single.created)}</h5>
                <div className="row justify-content-center">
                    <button onClick={this.deleteItem} type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        single: state.todo.single
    }
}

export default connect(mapStateToProps, { getSingleItem, deleteSingleItem })(ViewItem);