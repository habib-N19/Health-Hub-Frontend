import { Row, Col, Typography, Button, Modal, Divider } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSuppliesQuery, useTopSuppliesQuery } from "../../redux/features/supply/supplyApi";
import { useState } from "react";

const { Title, Text } = Typography;

const SupplyDetail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { id } = useParams();
    const location = useLocation();
    const isTopSupply = location.pathname.includes("top");
    const useGetSupplyQuery = isTopSupply ? useTopSuppliesQuery : useSuppliesQuery;
    const { data, isLoading } = useGetSupplyQuery({});
    if (isLoading) return <div>Loading...</div>;
    const supplyDetail = data?.find((supply: { _id: string | undefined; }) => supply._id === id);
    const { img, title, category, amount, short_description, long_description } = supplyDetail;

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <Button type="primary" style={{ marginBottom: "1rem" }}>
                <Link to="/supplies">Back to Supplies</Link>
            </Button>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} md={12}>
                    <div style={{ borderRadius: "1rem", overflow: "hidden" }}>
                        <img
                            src={img}
                            alt="supplyImage"
                            style={{ width: "100%", objectFit: "cover" }}
                        />
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ padding: "0 1rem", display: 'flex', flexDirection: 'column' }}>
                        <Title level={2} style={{ marginBottom: "1rem", color: "#000" }}>{title}</Title>
                        <Text strong style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Amount: {amount}</Text>
                        <Text style={{ marginBottom: "1rem" }}>{short_description}</Text>
                        <Text style={{ marginBottom: "0.5rem" }}>Category: {category}</Text>
                        <Button type="primary" onClick={showModal}>
                            Donate Now
                        </Button>
                        <Modal
                            title="Confirm Donation"
                            visible={isModalOpen}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
                                <Link to='/dashboard' key="confirm">
                                    <Button type="primary" onClick={handleOk}>Confirm Donation</Button>
                                </Link>,
                            ]}
                        >
                            <div>
                                <img
                                    src={img}
                                    alt="supplyImage"
                                    style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                                />
                                <Title level={3} style={{ marginTop: "1rem" }}>{title}</Title>
                                <Divider />
                                <Text strong>Amount:</Text>
                                <Text>{amount}</Text>
                                <Divider />
                                <Text strong>Category:</Text>
                                <Text>{category}</Text>
                                <Divider />
                                <Text strong>Description:</Text>
                                <Text>{short_description}</Text>
                            </div>
                        </Modal>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
                <Title level={3} style={{ marginBottom: "1rem", color: "#000" }}>Description</Title>
                <Text style={{ fontSize: "1rem", marginBottom: "1rem" }}>{long_description}</Text>
            </div>
        </div>
    );
};

export default SupplyDetail;
