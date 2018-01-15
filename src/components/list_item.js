import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSingleItem, getItems } from '../actions';

const ListItem = props => {

    const handleDelete = () => {
        props.deleteSingleItem(props._id).then(() => {
            props.getItems();
        })
    };

    return (
        <li className="list-group-item">
            <Link to={`/item/${props._id}`}>{props.title}</Link>
            <button className="btn btn-outline-danger float-right" onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default connect(null, { deleteSingleItem, getItems })(ListItem);