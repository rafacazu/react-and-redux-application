import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      course : {title: ""}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

    render(){
        const {courses} = this.props;
        return(
          <div>
            <h1>Courses</h1>
            <CourseList courses={courses}/>
            <h2>Add Course</h2>

            <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
            <input type="submit" value="Save" onClick={this.onClickSave} />
          </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};

function mapStateProps(state, ownPros){
  return{
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateProps, mapDispatchToProps)(CoursesPage) ;
