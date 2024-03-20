import { Row, Col, Typography, Button } from "antd";
import { useLocation, useParams } from "react-router-dom";
import { useSuppliesQuery, useTopSuppliesQuery } from "../../redux/features/supply/supplyApi";

const { Title, Text } = Typography;

const SupplyDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const isTopSupply = location.pathname.includes("top");
    const useGetSupplyQuery = isTopSupply ? useTopSuppliesQuery : useSuppliesQuery;
    const { data, isLoading } = useGetSupplyQuery({});
    if (isLoading) return <div>Loading...</div>
    const supplyDetail = data?.find((supply: { _id: string | undefined; }) => supply._id === id);
    console.log(supplyDetail);
    const { img, title, category, amount, short_description, long_description
    } = supplyDetail
    return (
        <div>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} md={12}>
                    <div
                        style={{
                            borderRadius: "1rem",
                            backgroundColor: "#E5E7EB",
                            padding: "1rem",
                        }}
                    >
                        <img
                            src={img}
                            alt="supplyImage"
                            style={{
                                borderRadius: "1rem",
                                height: "300px",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0 1rem",
                            height: "100%",
                        }}
                    >
                        <div style={{ textAlign: "left" }}>
                            <Title
                                level={2}
                                style={{
                                    marginBottom: "1rem",
                                    color: "#000",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {title}
                            </Title>
                            <Text style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                                {amount}
                            </Text>
                            <Text>
                                {short_description}
                            </Text>
                            <Text style={{ marginBottom: "0.5rem" }}>{category}</Text>
                            <Button
                                type="primary"
                                style={{ backgroundColor: "#10B981", borderColor: "#10B981" }}
                            >
                                Donate Now
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
                <Title level={3} style={{ color: "#000", marginBottom: "1rem" }}>
                    Description
                </Title>
                <Text style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    {long_description}
                </Text>

            </div>
        </div>
    );
};

export default SupplyDetail;
