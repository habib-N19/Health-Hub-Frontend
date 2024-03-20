import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import DisasterPreparednessProtocols from '../DisasterPrepardnessProtocols/DisasterPreparednessProtocols';
import EmergencyResponseProtocols from '../EmergencyProtocol/EmergencyResponseProtocols';
import GalleryDonation from '../GalleryDonation/GalleryDonation';
import TopSupplySection from '../TopSupply/TopSupplySection';
import TopProviders from '../TopProviders/TopProviders';


const HomePage = () => {
    return (
        <>
            <Banner />
            <TopSupplySection />
            <TopProviders />
            <GalleryDonation />
            <AboutUs></AboutUs>
            <EmergencyResponseProtocols></EmergencyResponseProtocols>
            <DisasterPreparednessProtocols />

        </>
    );
};

export default HomePage;