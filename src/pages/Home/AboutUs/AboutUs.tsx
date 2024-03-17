import { Carousel } from "antd";
import React from "react";
type TSliderContent = {
    title: string;
    image: string;
    description: string;
}
// // https://i.ibb.co/LSqY67r/image.png


// https://i.ibb.co/YD5mjCk/image.png


// https://i.ibb.co/0svpgph/image.png
const AboutUs = () => {
    const sliderContent: TSliderContent[] = [
        {
            title: "Our Mission",
            image: "https://i.ibb.co/vzWGgRD/image.png",
            description: "A depiction of a community coming together amidst a disaster, showcasing resilience and hope."
        },
        {
            title: "Objectives",
            image: "https://i.ibb.co/hy9XT8d/image.png",
            description: "Illustration of a roadmap, symbolizing strategic planning and clear objectives to achieve our mission."
        },
        {
            title: "Community Impact",
            image: "https://i.ibb.co/kQXZT6J/image.png",
            description: "Images of smiling faces receiving aid, representing the tangible impact our platform has on communities' health and well-being."
        },
        {
            title: "Supply Chain Management",
            image: "https://i.ibb.co/JnLY3R7/image.png",
            description: "Visual representation of a streamlined supply chain, emphasizing efficiency and reliability in delivering crucial medical supplies to those in need."
        }
    ];
    const sliderStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        height: '400px',
        margin: '0 auto',
        width: '600px',
        alignItems: 'center',
        justifyContent: 'center'

    }
    const sliderContentStyle: React.CSSProperties = {
        flex: 1,
        // height: '400px'


    }
    return (
        <div style={{ background: 'white', maxWidth: '1200px', margin: '0 auto', width: '80%', textAlign: 'center' }}>
            <h3>Who are we</h3>
            <div>
                <h1>Empowering Communities: Our Mission in Post-Disaster Health and Supply Chain Management</h1>
                <p>Welcome to our platform dedicated to empowering communities in the aftermath of disasters. We are committed to ensuring the well-being of individuals through effective health and medical supply chain management. Explore our objectives, impact, and dedication to serving communities in need.</p>
            </div>
            <div style={{ marginTop: '40px' }}>

                <Carousel autoplay>
                    {sliderContent.map((content, index) => (
                        <>

                            <div style={sliderStyle} key={index}>
                                <div style={sliderContentStyle}>
                                    <img style={{ maxWidth: "400px" }} src={content.image} alt={content.title} />
                                </div>
                                <div style={sliderContentStyle}>
                                    <h3>{content.title}</h3>
                                    <p>{content.description}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </Carousel>

            </div>



        </div>
    )
}

export default AboutUs