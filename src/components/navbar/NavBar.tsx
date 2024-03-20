import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";


const NavBar = () => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    const handleLogOut = () => {
        dispatch(logout());
    }




    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();
    // const headerStyle: React.CSSProperties = {
    //     textAlign: 'center',
    //     color: '#fff',
    //     height: 64,
    //     paddingInline: 48,
    //     lineHeight: '64px',
    //     backgroundColor: '#4096ff',
    // };

    return (
        <Header
            style={{
                // position: 'sticky',
                top: 0,
                zIndex: 6,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#fff',
                // paddingInline: 48,
                backgroundColor: '#4096ff',

            }}
        >
            <div className="demo-logo" style={{ display: 'flex', alignItems: 'center' }} >
                <Link style={{ width: '44px', height: '44px' }} to='/'>
                    <img style={{ width: '44px', height: '44px' }} src="logo.jpg" alt="logo" />
                </Link>
            </div>

            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                style={{ minWidth: 0, backgroundColor: '#4096ff', }}
            >
                <Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key="all-supply"><Link to='/supplies'>All Supply</Link></Menu.Item>

                {
                    token ? (
                        <>
                            <Menu.Item key="dashboard"><Link to='/dashboard'>Dashboard</Link></Menu.Item>
                            <Menu.Item onClick={handleLogOut} key="logout">Logout</Menu.Item>
                        </>
                    ) :
                        <Menu.Item key="login"><Link to='/login'>Login</Link></Menu.Item>
                }
            </Menu>
        </Header>
    );

}
export default NavBar;