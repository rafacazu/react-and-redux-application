import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AboutPage from './components/about/aboutPage';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import { component } from 'react-router/lib/PropTypes';
import MenageCoursePage from './components/course/MenageCoursePage';

//items inside of Route component={App} can be retrieved on App.js as {this.props.children}
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={MenageCoursePage} />
        <Route path="course/:id" component={MenageCoursePage} />
    </Route>
);
