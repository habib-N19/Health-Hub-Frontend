/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { useGetVolunteeringOpportunitiesQuery } from '../../redux/features/Volunteer/volunteerAPi';

const { Meta } = Card;

const Volunteer = () => {
    const { data: opportunities, isLoading } = useGetVolunteeringOpportunitiesQuery({});
    console.log(opportunities);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Row gutter={16}>
            {opportunities?.map((opportunity: any) => (
                <Col span={8} key={opportunity._id}>
                    <Link to={`/volunteer/${opportunity._id}`}>
                        <Card
                            hoverable
                            cover={<img alt={opportunity.title} src={opportunity.image} />}
                        >
                            <Meta title={opportunity.title} description={opportunity.description} />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default Volunteer;