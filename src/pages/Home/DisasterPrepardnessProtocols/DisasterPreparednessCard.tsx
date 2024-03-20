import { Card } from "antd";
import { Resource } from "./DisasterPreparednessProtocols";

type DisasterPreparednessProps = {
    category: string,
    resources: Resource


}
const DisasterPreparednessCard = ({ category, resources }: DisasterPreparednessProps) => {
    return (
        <Card
            // hoverable
            style={{ boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '16px', marginTop: '18px', borderRadius: '8px' }}
            cover={<div style={{ backgroundColor: '#f0f2f5', borderRadius: '8px 8px 0 0' }} />}
        >
            <h3 style={{ fontSize: '18px', textAlign: 'center' }}>{category}</h3>
            <ul style={{ padding: '0 16px', marginBottom: '0' }}>
                {resources.map((resource, index) => (
                    <li key={index} style={{ fontWeight: 'bold', marginTop: '10px' }}>
                        {resource.title}
                        <p style={{ fontWeight: 'lighter', fontSize: '14px', margin: '8px 0 0 0' }}>{resource.description}</p>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default DisasterPreparednessCard;