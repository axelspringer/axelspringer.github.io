import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('../../../components/Gallery/Gallery', () => 'Gallery')
jest.mock('../../../components/ProgressiveImage/ProgressiveImage', () => 'ProgressiveImage')

describe('App component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <App />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});