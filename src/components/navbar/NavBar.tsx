import { Menu, Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { selectTheme, setTheme } from "../../redux/features/theme/themeSlice";


const NavBar = () => {
    const token = useAppSelector(useCurrentToken);
    const theme = useAppSelector(selectTheme)
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(logout());
    }


    const handleThemeChange = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
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
                // color: '#fff',
                // paddingInline: 48,
                // backgroundColor: '#4096ff',

            }}
        >
            <div className="demo-logo" style={{ flex: 1, display: 'flex', alignItems: 'center' }} >
                <Link style={{ width: '44px', height: '44px' }} to='/'>
                    <img style={{ width: '44px', height: '44px' }} src="logo.jpg" alt="logo" />
                </Link>
            </div>

            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                style={{ minWidth: 0, flex: 1 }}
            >
                <Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key="all-supply"><Link to='/supplies'>All Supply</Link></Menu.Item>


                {
                    token ? (
                        <>
                            <Menu.Item key="dashboard"><Link to='/dashboard'>Dashboard</Link></Menu.Item>
                            <Menu.Item key="community"><Link to='/community'>Community</Link></Menu.Item>
                            <Menu.Item key="volunteer"><Link to='/volunteer'>Volunteer</Link></Menu.Item>
                            <Menu.Item onClick={handleLogOut} key="logout">Logout</Menu.Item>
                        </>
                    ) :

                        <Menu.Item key="login"><Link to='/login'>Login</Link></Menu.Item>
                }
                <Menu.Item key="about"><Link to='/about'>About Us</Link></Menu.Item>
                <Menu.Item key="theme" style={{ backgroundColor: 'transparent' }}>
                    <Switch

                        checked={theme === 'dark'}
                        onChange={handleThemeChange}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    /></Menu.Item>

            </Menu>
        </Header>
    );

}
export default NavBar;