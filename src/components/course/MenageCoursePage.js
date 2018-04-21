import React, {PropTypes} from  'react';
import {connect} from 'react-redux';
import {BindActionCreators} from 'react-redux';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/2.6/node_modules/redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
class MenageCoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };
    }

    render(){
        return(
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}/>
        );
    }
}

MenageCoursePage.propTypes = {
   course: PropTypes.object.isRequired,
   authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    const course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}

    const authorsFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })
    return {
        course: course,
        authors: authorsFormattedForDropDown
    };
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenageCoursePage);