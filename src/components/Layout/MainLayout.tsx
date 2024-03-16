
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import FooterSection from "../footer/Footer";
const { Content } = Layout
const MainLayout = () => {
    return (
        <Layout style={{ maxWidth: '100vw' }}>
            <NavBar />
            <Content>
                <Outlet />
            </Content>
            <FooterSection />
        </Layout>
    );
};

export default MainLayout;