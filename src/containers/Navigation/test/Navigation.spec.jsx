import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';

describe('Navigation component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Navigation />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});