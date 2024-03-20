
import { Row, Col, Typography } from 'antd';
import SupplyCard from './SupplyCard';
import { useSuppliesQuery } from '../../redux/features/supply/supplyApi';
import { Key } from 'react';

const { Title } = Typography;

const Supplies = () => {
    const { data: supplies, isLoading } = useSuppliesQuery({});
    if (isLoading) return <div>Loading...</div>

    return (
        <div style={{ marginBottom: '12px', paddingLeft: '5px', paddingRight: '0', maxWidth: '1200px', width: '90vw', margin: '0 auto' }}>
            <Title level={3} className="text-xl md:text-3xl font-bold">Related Products</Title>
            <Row gutter={[16, 16]}>
                {supplies.map((supplyItem: { id: Key | null | undefined; }) => (
                    <Col key={supplyItem.id} xs={24} sm={12} lg={8}>
                        <SupplyCard supplyItem={supplyItem} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Supplies