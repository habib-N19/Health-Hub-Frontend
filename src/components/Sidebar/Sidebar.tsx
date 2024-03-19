
import { Layout, Menu } from 'antd';
import sidebarItemsGenerator from '../../utils/sidebarItemsGenerator';
import { dashboardRoutes } from '../../routes/dashboard.routes';

const { Sider } = Layout;
const Sidebar = () => {
    const sidebarItems = sidebarItemsGenerator(dashboardRoutes)
    return (
        <Sider breakpoint='lg' collapsedWidth={0}>
            <div
                style={{
                    color: 'black',
                    backgroundColor: 'white',
                    height: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1>Logo</h1>
            </div>
            <Menu
                // theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItems}
            />
        </Sider>
    );
};

export default Sidebar;