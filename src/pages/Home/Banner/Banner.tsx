import { Link } from "react-router-dom";
import CtaBtn from "../../../components/CtaBtn/CtaBtn";
import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";

const Banner = () => {
    const cardHeading: React.CSSProperties = {
        fontSize: "40px",
        paddingTop: "30px",
        paddingLeft: "12px",
        textAlign: "left",
    };
    const cardSubHeading: React.CSSProperties = {
        fontSize: "12px",
        paddingTop: "30px",
        fontWeight: "lighter",
        paddingLeft: "12px",
        textAlign: "left",
    };
    return (
        <div className="banner_container">
            <div style={{ padding: "30px 0", width: "50%", margin: "0 auto" }}>
                <h1 style={{}}>
                    Strengthening Communities After Disaster: A Health & Medical Supply
                    Platform
                </h1>
                <p>
                    Building Hope, Resilience, and Community Support Through Efficient
                    Post-Disaster Health and Medical Supply Chain Management
                </p>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gridColumnGap: "4px",
                    gridRowGap: "4px",
                }}
            >
                <div style={{ gridArea: "1 / 1 / 3 / 2" }}>
                    <div
                        className="header_card"
                        style={{
                            height: "300px",
                            backgroundImage: "url('../../../../public/images/bgHeader.jpg')",
                            position: "relative",
                        }}
                    >
                        <h1 style={cardHeading}>55%</h1>
                        <p style={cardSubHeading}>
                            19 thousand People Died , 1.5 million People Affected, 1.5 million
                            People Displaced
                        </p>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "0",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            <CtaBtn
                                ctaText="Donate Now"
                                link="/"
                                textColor={"#fff"}
                                arrowColor={"#000"}
                                linkIconBg={"#c6f700"}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ gridArea: "1 / 2 / 2 / 5" }}>
                    <div
                        className=""
                        style={{ display: "flex", justifyContent: "center", gap: "8px" }}
                    >
                        <Link
                            style={{
                                background: "#1b0404",
                                borderRadius: "9999px",
                                padding: "8px 14px",
                                color: "#ffffffd3",
                            }}
                            to="/"
                        >
                            Donate Now
                        </Link>
                        <div
                            style={{
                                background: "#dbcccc",
                                borderRadius: "9999px",
                                padding: "8px 14px",
                                color: "#140202d2",
                            }}
                        >
                            <PlayCircleOutlined /> Watch Video
                        </div>
                    </div>
                </div>
                <div style={{ gridArea: "1 / 5 / 3 / 6" }}>
                    <div
                        className="header_card"
                        style={{
                            height: "300px",
                            backgroundImage: "url('../../../../public/images/bgHeader.jpg')",
                            position: "relative",
                        }}
                    >
                        <h1 style={cardHeading}>55%</h1>
                        <p style={cardSubHeading}>
                            19 thousand People Died , 1.5 million People Affected, 1.5 million
                            People Displaced
                        </p>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "0",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            <CtaBtn
                                ctaText="Donate Now"
                                link="/"
                                textColor={"#fff"}
                                arrowColor={"#000"}
                                linkIconBg={"#c6f700"}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ gridArea: "3 / 1 / 4 / 2" }}>
                    {" "}
                    <div
                        className="header_card"
                        style={{
                            height: "100px",
                            backgroundImage: "url('../../../../public/images/bgHeader.jpg')",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "24px",
                                paddingTop: "30px",
                                paddingLeft: "12px",
                                textAlign: "left",
                            }}
                        >
                            Let them be heard
                        </h2>
                    </div>
                </div>
                <div style={{ gridArea: "3 / 5 / 4 / 6" }}>
                    {" "}
                    <div
                        className="header_card"
                        style={{
                            height: "100px",
                            backgroundImage: "url('../../../../public/images/bgHeader.jpg')",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "24px",
                                paddingTop: "30px",
                                paddingLeft: "12px",
                                textAlign: "left",
                            }}
                        >
                            Need your help
                        </h2>
                    </div>{" "}
                </div>
                <div style={{ gridArea: "2 / 2 / 4 / 3" }}>
                    <div
                        className="header_card"
                        style={{
                            height: "300px",
                            backgroundImage: "url('../../../../public/images/bgHeader.jpg')",
                            display: "flex",
                            alignItems: "baseline",
                            flexDirection: "column",
                        }}
                    >
                        <p style={{ textAlign: "left", padding: "14px" }}>Health</p>
                        <h1 style={{ fontSize: "24px", marginTop: "auto" }}>
                            Lorem ipsum dolor sit amet .1
                        </h1>
                    </div>
                </div>
                <div style={{ gridArea: "2 / 3 / 4 / 4", marginTop: 'auto' }}>

                    <div className="header_card" style={{ height: '200px', backgroundColor: 'rgb(100 116 139)', position: 'relative' }}>

                        <h1 style={{ paddingTop: '20px' }}>Lorem ipsum dolor sit2.</h1>

                        <div style={{ position: "absolute", bottom: '0', width: '100%', textAlign: 'center' }}>
                            <CtaBtn ctaText='Donate Now' link='/' textColor={'#fff'} arrowColor={'#000'} linkIconBg={'#c6f700'} />
                        </div>

                    </div>
                </div>
                <div style={{ gridArea: "2 / 4 / 4 / 5" }}>
                    {" "}
                    <div
                        className="header_card"
                        style={{
                            height: "300px",
                            backgroundImage: "url('../../../../public/images/bgHeader.jpg')",
                        }}
                    >
                        <h4>lorem</h4>
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
