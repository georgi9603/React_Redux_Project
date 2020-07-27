import React from 'react';

class CoursePage extends React.Component {
    state = {
        course: {
            title: ""
        }
    };

    //Handling event change with arrow func remove the dependancy from binding this in constructor or in render form
    handleChange = event => {
        //Copying the state instead of directly modifying it
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    };

    //Handling event change with arrow func remove the dependancy from binding this in constructor or in render form
    handleSubmit = event => {
        event.preventDefault();
        alert(this.state.course.title);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <h2>Courses</h2>
            <h3>
                Add Course
            </h3>
            <input type="text" onChange={this.handleChange} value={this.state.course.title}></input>
            <input type="submit" value="Save" />
        </form>;
    }
}

export default CoursePage;