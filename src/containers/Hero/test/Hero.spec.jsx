import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../Hero';

jest.mock('../../../components/ProgressiveImage/ProgressiveImage', () => 'ProgressiveImage')

describe('Hero component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Hero />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});