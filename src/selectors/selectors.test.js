import expect from 'expect';
import { authorsFormattedForDropDown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropDown', () => {
        it('should return autho data formatted for use in drop down', () => {
            const authors = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
                { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' }
            ];

            const expected = [
                { value: 'cory-house', text: 'Cory House' },
                { value: 'scott-allen', text: 'Scott Allen' }
            ];

            expect(authorsFormattedForDropDown(authors)).toEqual(expected);
        });
    });
});