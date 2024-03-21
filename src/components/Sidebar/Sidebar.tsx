
import { Layout, Menu } from 'antd';
import sidebarItemsGenerator from '../../utils/sidebarItemsGenerator';
import { dashboardRoutes } from '../../routes/dashboard.routes';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const Sidebar = () => {
    const sidebarItems = sidebarItemsGenerator(dashboardRoutes)
    console.log(sidebarItems);
    return (
        <Sider breakpoint='lg' style={{ backgroundColor: 'transparent', position: 'sticky' }} collapsedWidth={0}>
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
                <div className="demo-logo" style={{ display: 'flex', alignItems: 'center' }} >
                    <Link style={{ width: '44px', height: '44px' }} to='/'>
                        <img style={{ width: '44px', height: '44px' }} src="logo.jpg" alt="logo" />
                    </Link>
                </div>
            </div>
            <Menu
                // theme="light"
                mode="inline"
                style={{ minWidth: 0, backgroundColor: '#4096ff', }}
                defaultSelectedKeys={['/dashboard']}
                items={sidebarItems}
            />
        </Sider>
    );
};

export default Sidebar;