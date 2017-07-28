import React from 'react';
import './Gallery.scss';

import GalleryService from '../../services/GalleryService';
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';

export default (props) => {
    function renderImages() {
        let images = [];

        GalleryService.getImages().forEach((image, index) => {
            images.push(
                <ProgressiveImage keepRatio={true} className='gallery__image' key={'galleryImage' + index} src={image.imgUrl} thumbnail={image.thumbnail} blurRadius='3' />
            );
        });

        return images;
    }

    return (
        <div className='gallery__container'>
            {renderImages()}
        </div>
    );

}