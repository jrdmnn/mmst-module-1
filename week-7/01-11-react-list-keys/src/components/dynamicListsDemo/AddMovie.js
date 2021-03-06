import React, { Component } from 'react';

class AddMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: ''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheMovie(this.state);
        this.setState({
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: ''
        })
    }
    handleChange = (event) => {
        let { name, value } = event.target;
        if (name === "hasOscars" && value === "on") {
            value = true;
        }
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} />

                    <label>Director:</label>
                    <input type="text" name="director" value={this.state.director} onChange={this.handleChange} />

                    <label>Oscar Awarded:</label>
                    <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={this.handleChange} />

                    <label>IMDb Rating:</label>
                    <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default AddMovie;