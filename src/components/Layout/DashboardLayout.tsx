import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <Layout style={{ maxWidth: '100vw' }}>
            {/* <NavBar /> */}
            <div style={{ position: 'relative' }}>

                <Sidebar />
            </div>
            <Content>
                <Outlet />
            </Content>

        </Layout>
    );
};

export default DashboardLayout;