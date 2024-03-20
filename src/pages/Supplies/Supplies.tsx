
import { Row, Col, Typography } from 'antd';
import SupplyCard from './SupplyCard';

const { Title } = Typography;

const Supplies = () => {
    const supplies = [
        {
            "id": 1,
            "img": "https://i.postimg.cc/cLKL1XX7/dish1.png",
            "title": "Emergency Medical Kits",
            "category": "Medical Supplies",
            "amount": "50 kits",
            "viewDetailButton": {
                "text": "View Detail",
                "action": "navigate",
                "destination": "/supplies/1"
            }
        },
        {
            "id": 2,
            "img": "https://i.postimg.cc/J4FRFjMs/dish2.png",
            "title": "Compact First Aid Kits",
            "category": "First Aid Kits",
            "amount": "200 units",
            "viewDetailButton": {
                "text": "View Detail",
                "action": "navigate",
                "destination": "/supplies/2"
            }
        },
        {
            "id": 3,
            "img": "https://i.postimg.cc/cLKL1XX7/dish1.png",
            "title": "Ibuprofen Tablets",
            "category": "Medications",
            "amount": "1000 tablets",
            "viewDetailButton": {
                "text": "View Detail",
                "action": "navigate",
                "destination": "/supplies/3"
            }
        },
        {
            "id": 4,
            "img": "https://i.postimg.cc/J4FRFjMs/dish2.png",
            "title": "Surgical Gloves",
            "category": "Medical Supplies",
            "amount": "500 pairs",
            "viewDetailButton": {
                "text": "View Detail",
                "action": "navigate",
                "destination": "/supplies/4"
            }
        },
        {
            "id": 5,
            "img": "https://i.postimg.cc/cLKL1XX7/dish1.png",
            "title": "Antiseptic Wipes",
            "category": "First Aid Kits",
            "amount": "3000 wipes",
            "viewDetailButton": {
                "text": "View Detail",
                "action": "navigate",
                "destination": "/supplies/5"
            }
        },
        {
            "id": 6,
            "img": "https://i.postimg.cc/J4FRFjMs/dish2.png",
            "title": "Antibiotics Assortment",
            "category": "Medications",
            "amount": "200 packets",
            "viewDetailButton": {
                "text": "View Detail",
                "action": "navigate",
                "destination": "/supplies/6"
            }
        }
    ]
    return (
        <div style={{ marginBottom: '12px', paddingLeft: '5px', paddingRight: '0', maxWidth: '1200px', width: '90vw', margin: '0 auto' }}>
            <Title level={3} className="text-xl md:text-3xl font-bold">Related Products</Title>
            <Row gutter={[16, 16]}>
                {supplies.map(supplyItem => (
                    <Col key={supplyItem.id} xs={24} sm={12} lg={8}>
                        <SupplyCard supplyItem={supplyItem} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Supplies