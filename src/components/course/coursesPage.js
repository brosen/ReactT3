import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { browserHistory } from 'react-router';
import * as courseActions from '../actions/courseActions';
//import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            course: { title: '' }
        };
        //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    //redirectToAddCoursePage() {
    //    browserHistory.push('/course');
    //}
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
    //render() {
    //    return (
    //        <div>
    //            <h1>Courses</h1>
    //            <input type="submit"
    //                value="Add Course"
    //                className="btn btn-primary"
    //                onClick={this.redirectToAddCoursePage} />

    //            <CourseList courses={this.props.courses} />
    //        </div>
    //    );
    //}
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses  //return what you want to expose. if it wasnt aliased in reducer/index.js, then this would be courses: state.courseReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //connect calls function and then calls the resulting function with coursespage in second paren

/*
mapStateToProps and mapDispatchToProps can really be called what ever you want
*/