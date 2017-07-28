import images from '../data/jobImages'

class GalleryService {
    constructor() {

    }

    getImages() {
        return images;
    }
}

export default new GalleryService();