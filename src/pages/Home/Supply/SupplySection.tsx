import { Button, Col, Row } from "antd";
import React from "react";
import SupplyCard from "./SupplyCard";
import { Link } from "react-router-dom";

const SupplySection: React.FC = () => {
    return (
        <Row style={{ margin: 0 }} gutter={8}>
            <Col span={7}>
                <SupplyCard imgUrl="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" title="Supply 1" category="Category 1" amount={100} detailUrl="/supply/1" />
            </Col>
            <Col span={7}>
                <SupplyCard imgUrl="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" title="Supply 1" category="Category 1" amount={100} detailUrl="/supply/1" />
            </Col>
            <Col span={7}>
                <SupplyCard imgUrl="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" title="Supply 1" category="Category 1" amount={100} detailUrl="/supply/1" />
            </Col>
            <Col span={7}>
                <SupplyCard imgUrl="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" title="Supply 1" category="Category 1" amount={100} detailUrl="/supply/1" />
            </Col>
            <Col span={7}>
                <SupplyCard imgUrl="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" title="Supply 1" category="Category 1" amount={100} detailUrl="/supply/1" />
            </Col>
            <Col span={7}>
                <SupplyCard imgUrl="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" title="Supply 1" category="Category 1" amount={100} detailUrl="/supply/1" />
            </Col>
            <Col span={20} style={{

                textAlign: "center"
            }
            }>
                <Link to="/supply"><Button type="default" size="large">View All Supplies</Button></Link>
            </Col>
        </Row>
    );
};

export default SupplySection;