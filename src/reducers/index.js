import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses, //aliased above, in es6 if both sides are the same can do it like this instead of  courses:courses. short hand property name
    authors
});

export default rootReducer;