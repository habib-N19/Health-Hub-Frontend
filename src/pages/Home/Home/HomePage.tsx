import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import GalleryDonation from '../GalleryDonation/GalleryDonation';
import SupplySection from '../Supply/SupplySection';
import TopProviders from '../TopProviders/TopProviders';

const HomePage = () => {
    return (
        <>
            <Banner />
            <SupplySection />
            <TopProviders />
            <GalleryDonation />
            <AboutUs></AboutUs>

        </>
    );
};

export default HomePage;