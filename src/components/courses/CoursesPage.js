import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
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
        debugger;
        this.props.actions.createCourse(this.state.course);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <h2>Courses</h2>
            <h3>
                Add Course
            </h3>
            <input type="text" onChange={this.handleChange} value={this.state.course.title}></input>
            <input type="submit" value="Save" />
            {this.props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
        </form>;
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        //Don't request the whole store because it will re-render when any
        //data from store changes. Request only the data needed.
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);