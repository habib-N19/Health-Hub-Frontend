import { Card, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SupplyCard = ({ supplyItem }: { supplyItem: any }) => {
    const { id, img, title, category, amount, viewDetailButton } = supplyItem;

    return (
        <Card
            hoverable
            cover={
                <img
                    alt={title}
                    src={img}
                    style={{ height: "200px", objectFit: "cover" }}
                />
            }
            style={{ marginBottom: "1.5rem", borderRadius: "1rem" }}
        >
            <div>
                <Title level={5} style={{ marginBottom: "0.5rem", color: "#374151" }}>
                    {title}
                </Title>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                    }}
                >
                    <Text style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                        {category}
                    </Text>
                    <Text style={{ fontSize: "0.875rem", color: "#EF4444" }}>
                        {amount}
                    </Text>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <Link to={`/supplies/${id}`}>
                        <Button type="primary">{viewDetailButton.text}</Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default SupplyCard;
