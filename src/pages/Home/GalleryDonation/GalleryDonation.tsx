
import { PhotoAlbum } from "react-photo-album";
import { photos } from "./photos";
import { Typography } from "antd";

const { Title } = Typography;

const GalleryDonation = () => {
    return (
        <div style={{ width: '90vw', maxWidth: '1200px', margin: '40px auto', padding: '40px 0' }}>
            <Title level={1} style={{ textAlign: 'center', paddingBottom: '30px' }}>Gallery</Title>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '800px' }}>
                    <PhotoAlbum photos={photos} layout="masonry" />
                </div>
            </div>
        </div>
    )
}

export default GalleryDonation;
