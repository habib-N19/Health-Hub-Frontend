import { Typography } from 'antd';
import TopProvidersCard from './TopProvidersCard';

const { Title } = Typography;

const TopProviders = () => {



    return (
        <div style={{ textAlign: 'center', minHeight: '90vh', margin: '40px auto', backgroundColor: 'white', padding: '20px', maxWidth: '1200px', }}>
            <Title level={1} >Top Donation Providers</Title>
            <div className='container'>

                <div className="example-container">
                    <TopProvidersCard />
                </div>
            </div>
        </div>


    )
}

export default TopProviders



