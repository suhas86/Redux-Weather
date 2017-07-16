import React, { Component } from 'react';
//import connect from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    onSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="input-group">
                <input
                    placeholder="Get five day forcast by typing your city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit"
                        className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}