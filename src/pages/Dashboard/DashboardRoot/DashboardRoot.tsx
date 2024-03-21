import { PieChart } from "../../../components/pieChart/PieChart";
import { Card, Typography, Row, Col, Spin, Divider } from 'antd';
import { useSuppliesQuery } from "../../../redux/features/supply/supplyApi";

const { Title } = Typography;

const DashboardRoot = () => {
    const { data: supplies, isLoading } = useSuppliesQuery({});

    if (isLoading) return <Spin size="large" />;

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Overview</Title>

            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Divider orientation="left">Supplies</Divider>
                    <Row gutter={[16, 16]} justify="center">
                        {supplies?.map((supply) => (
                            <Col key={supply.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                                <Card className="content-box" style={{ borderRadius: '10px', height: '100%' }}>
                                    <h3>{supply.title}</h3>
                                    <p><strong>Amount:</strong> {supply.amount}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} md={12} lg={10} xl={8}>
                    <div style={{ padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                        <PieChart supplies={supplies} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default DashboardRoot;
