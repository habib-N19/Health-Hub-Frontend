import { Carousel } from "antd";
import React from "react";
import BannerContent from "./BannerContent";

const Banner = () => {
    const contentStyle: React.CSSProperties = {
        height: '90svh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <Carousel autoplay>
            <div><BannerContent style={contentStyle} /></div>
            <div><BannerContent style={contentStyle} /></div>
            <div><BannerContent style={contentStyle} /></div>
        </Carousel>
    );
};

export default Banner;