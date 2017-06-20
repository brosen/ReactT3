import * as types from './actionTypes';

export function createCourse(course) {  //Action creator
    return { type: types.CREATE_COURSE, course };
}