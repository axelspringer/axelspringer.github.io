import React from 'react';
import renderer from 'react-test-renderer';
import Jobs from '../Jobs';

jest.mock('../../../components/Gallery/Gallery', () => 'Gallery')

describe('Jobs component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Jobs />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});