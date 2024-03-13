
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
const { Header, Content, Footer } = Layout
const MainLayout = () => {
    return (
        <Layout>
            <Header>Header</Header>
            <Content>
                <h1>Main Layout</h1>
                <Outlet />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default MainLayout;