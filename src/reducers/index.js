import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, //aliased above, in es6 if both sides are the same can do it like this instead of  courses:courses. short hand property name
    authors,
    ajaxCallsInProgress
});

export default rootReducer;