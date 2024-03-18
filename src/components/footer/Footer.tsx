import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from "@ant-design/icons";
import { Col, Divider, Layout, Row } from "antd"


const { Footer } = Layout
const FooterSection = () => {
    return (
        <Footer style={{ backgroundColor: '#f0f2f5', padding: '20px 0', maxWidth: '1200px', width: '90vw', margin: '0 auto' }}>
            <Row justify="center" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1234567890</p>
                </Col>
                <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
                    <h3>Social Media</h3>
                    <p>Follow us on:</p>
                    <div>
                        <a href="https://facebook.com"><FacebookFilled /></a>
                        <a href="https://twitter.com"><TwitterSquareFilled /></a>
                        <a href="https://instagram.com"><InstagramFilled /></a>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} style={{ textAlign: 'center' }}>
                    <h3>Resources</h3>
                    <p>Explore more resources:</p>
                    <a href="/disaster-preparedness">Disaster Preparedness Guides</a>
                    <Divider type="vertical" />
                    <a href="/emergency-response">Emergency Response Procedures</a>
                    {/* Add more relevant resources as needed */}
                </Col>
            </Row>
            <Divider style={{ margin: '20px 0', borderColor: '#d9d9d9' }} />
            <p style={{ textAlign: 'center', color: '#888' }}>
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
        </Footer>
    );
};

export default FooterSection;