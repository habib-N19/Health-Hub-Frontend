import PhotoAlbum from "react-photo-album"
import photos from "./photos"

const GalleryDonation = () => {
    return (
        <PhotoAlbum photos={photos} layout="rows" />
    )
}

export default GalleryDonation