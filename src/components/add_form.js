import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { addItem } from '../actions';


class AddForm extends Component {

    renderInput({ label, input, meta: { touched, error } }) {

        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} className="form-control" />
                <p className="text-danger">{touched && error}</p>
            </div>
        )
    }

    handleAddItem(values) {
        console.log('Form Submitted with:', values);

        this.props.addItem(values);

        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <div className="row my-4 justify-content-end">
                    <Link className="btn btn-outline-primary" to='/'>Back</Link>
                </div>
                <h1 className="text-center">Add To-Do Item</h1>
                <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
                    <Field name="title" label="Title:" component={this.renderInput} />
                    <Field name="details" label="Details:" component={this.renderInput} />
                    <button className="btn btn-outline-success">Add</button>
                    <button onClick={this.props.reset} type="button" className="btn btn-outline-danger ml-3">Reset Form</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.details) {
        errors.details = 'Please enter some details';
    }

    return errors;
}

AddForm = reduxForm({
    form: 'add-item',
    validate: validate
})(AddForm);

export default connect(null, { addItem })(AddForm);