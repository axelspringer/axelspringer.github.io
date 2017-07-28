import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '../Gallery';

jest.mock('../../../components/ProgressiveImage/ProgressiveImage', () => 'ProgressiveImage')

describe('Gallery component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Gallery />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});