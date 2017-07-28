import React from 'react';
import renderer from 'react-test-renderer';
import Socials from '../Socials';

describe('Socials component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Socials />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});