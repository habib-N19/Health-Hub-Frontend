/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row, Spin, Typography } from "antd";
import React from "react";
import TopSupplyCard from "./TopSupplyCard";
import { Link } from "react-router-dom";
import { useTopSuppliesQuery } from "../../../redux/features/supply/supplyApi";

const { Title } = Typography;
const TopSupplySection: React.FC = () => {
    const { data, isLoading } = useTopSuppliesQuery({});
    if (isLoading) return <Spin size="large" spinning />

    return (
        <Row style={{ margin: 0 }} gutter={8}>
            <Col span={24}>
                <Title level={2} style={{ textAlign: "center", margin: "4rem auto" }}>
                    Top Supplies
                </Title>
            </Col>

            {data?.map((supply: any) => (

                <Col key={supply.id} xs={24} md={8}>
                    <TopSupplyCard
                        imgUrl={supply.img}
                        title={supply.title}
                        category={supply.category}
                        amount={supply.amount}
                        detailUrl={`/supplies/top/${supply._id}`}
                    />
                </Col>
            ))
            }

            <Col span={20} style={{

                textAlign: "center"
            }
            }>
                <Link to="/supplies"><Button type="default" size="large">View All Supplies</Button></Link>
            </Col>
        </Row>
    );
};

export default TopSupplySection;