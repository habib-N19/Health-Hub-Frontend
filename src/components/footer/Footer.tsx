import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from "@ant-design/icons";
import { Col, Divider, Layout, Row, Typography } from "antd";

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const FooterSection = () => {
    return (
        <Footer style={{ backgroundColor: '#a5bee2', padding: '20px', maxWidth: '1200px', width: '90vw', margin: '0 auto', borderRadius: '8px' }}>
            <Row justify="center" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6} style={{ textAlign: 'center' }}>
                    <Title level={4}>Contact Us</Title>
                    <Paragraph>Email: info@healthhub.com</Paragraph>
                    <Paragraph>Phone: +88012345678</Paragraph>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} style={{ textAlign: 'center' }}>
                    <Title level={4}>Social Media</Title>
                    <Paragraph>Follow us on:</Paragraph>
                    <div>
                        <a href="https://facebook.com"><FacebookFilled /></a>
                        <a href="https://twitter.com"><TwitterSquareFilled /></a>
                        <a href="https://instagram.com"><InstagramFilled /></a>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={16} lg={12} style={{ textAlign: 'center' }}>
                    <Title level={4}>Resources</Title>
                    <Paragraph>Explore more resources:</Paragraph>
                    <Row justify="center">
                        <Col>
                            <a href="/#">Disaster Preparedness Guides</a>
                        </Col>
                        <Divider type="vertical" />
                        <Col>
                            <a href="/#">Emergency Response Procedures</a>
                        </Col>
                        {/* Add more relevant resources as needed */}
                        <Divider type="vertical" />
                        <Col>
                            <a href="/#">Volunteer Opportunities</a>
                        </Col>
                        <Divider type="vertical" />
                        <Col>
                            <a href="/#">Donate Now</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Divider style={{ margin: '20px 0', borderColor: '#d9d9d9' }} />
            <Paragraph style={{ textAlign: 'center', color: '#888' }}>
                © {new Date().getFullYear()} HealthHub. All rights reserved.
            </Paragraph>
        </Footer>
    );
};

export default FooterSection;
