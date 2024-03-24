import { Carousel, Col, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;

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
    ]
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '90vw', padding: '30px', textAlign: 'center' }}>
            <Title level={5}>Who are we</Title>
            <div>
                <Title level={1}>Empowering Communities: Our Mission in Post-Disaster Health and Supply Chain Management</Title>
                <Paragraph>Welcome to our platform dedicated to empowering communities in the aftermath of disasters. We are committed to ensuring the well-being of individuals through effective health and medical supply chain management. Explore our objectives, impact, and dedication to serving communities in need.</Paragraph>
            </div>
            <div style={{ marginTop: '40px' }}>

                <Carousel autoplay>
                    {sliderContent.map((content, index) => (
                        <div key={index}>
                            <Row gutter={[16, 16]} justify="center" align="middle">
                                <Col xs={24} md={12}>
                                    <img style={{ maxWidth: "100%" }} src={content.image} alt={content.title} />
                                </Col>
                                <Col xs={24} md={12}>
                                    <div style={{ textAlign: 'left' }}>
                                        <h3>{content.title}</h3>
                                        <p>{content.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Carousel>

            </div>



        </div>
    )
}

export default AboutUs