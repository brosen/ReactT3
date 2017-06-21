import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { ManageCoursesPage } from './ManageCoursePage'; //non default export, the ManageCoursePage named one 
//import ManageCoursePage from './ManageCoursesPage'; // to get default export on the page

describe('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' },
            authors: [],
            actions: { saveCourse: () => { return Promise.resolve(); } } //Mock for function
        };
        const wrapper = mount(<ManageCoursesPage {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

    });
});