import { Link } from "react-router-dom";

import { ArrowUpOutlined } from "@ant-design/icons";


type CtaBtnProps = {
    ctaText: string;
    link: string;
    textColor?: string;
    linkIconBg?: string;
    arrowColor?: string;
};
const CtaBtn = ({ ctaText, link, textColor, linkIconBg, arrowColor }: CtaBtnProps) => {
    const defaultStyles = {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px',
        color: textColor || 'white',
        backgroundColor: linkIconBg || 'blue',
    };
    return (
        <Link style={{
            backgroundColor: 'transparent', borderRadius: '9999px', backdropFilter: 'blur(34px)', padding: '10px 14px', display: 'inline-block', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', width: '100%'
        }} to={link} >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <p style={{ color: textColor, paddingRight: '8px' }}>{ctaText}</p>
                <div style={defaultStyles}>

                    <ArrowUpOutlined style={{ color: arrowColor, transform: 'rotate(45deg)' }} />
                </div>


            </div>
        </Link >
    );
};

export default CtaBtn;