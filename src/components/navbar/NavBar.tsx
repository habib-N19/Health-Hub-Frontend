import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
// import React from "react";

const items = [
    {
        key: 'home',
        label: 'Home'
    },
    {
        key: 'all-supply',
        label: 'All Supply'

    }
    , {
        key: 'login',
        label: 'Login'
    }
]



const navItems = items.map((item) => ({
    key: item.key,
    label: item.label,


}));
const NavBar = () => {
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
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-between',
                color: '#fff',
                paddingInline: 48,
                backgroundColor: '#4096ff',

            }}
        >
            <div className="demo-logo" >
                {/* <img src="" alt="logo" /> */}
                <span style={{ color: '#fff', fontSize: 24, fontWeight: 600 }}>Logo</span>
            </div>

            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={navItems}
                style={{ flex: 1, minWidth: 0, backgroundColor: '#4096ff', }}
            />
        </Header>
    );

}
export default NavBar;