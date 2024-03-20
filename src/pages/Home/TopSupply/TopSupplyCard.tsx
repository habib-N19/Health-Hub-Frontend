import { LinkOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
type SupplyCardProps = {
    imgUrl: string;
    title: string;
    category: string;
    amount: number;
    detailUrl: string;
}

const TopSupplyCard = ({ imgUrl, title, category, amount, detailUrl }: SupplyCardProps) => {
    return (
        <Card
            // style={{ width: 300 }}
            cover={
                <img
                    alt={title}
                    src={imgUrl}
                />
            }
            actions={[
                <Link to={detailUrl}>View Details <LinkOutlined key="link" /></Link>,
            ]}
        >
            <Meta
                title={title}
                description={`Category: ${category} | Amount: ${amount}`}
            />
        </Card>
    )
}

export default TopSupplyCard