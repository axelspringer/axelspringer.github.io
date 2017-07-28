import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('Footer component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Footer />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});