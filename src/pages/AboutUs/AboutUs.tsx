import { List, Typography } from "antd"
import { useGetVolunteersQuery } from "../../redux/features/Volunteer/volunteerAPi"
const { Title } = Typography

const AboutUs = () => {
    const { data: volunteers, isLoading, isError } = useGetVolunteersQuery({})
    return (
        <div>

            <Title level={1} > About Us</Title>
            <div>
                <h1>Our Volunteers</h1>
                {isLoading ? (
                    <p>Loading volunteers...</p>
                ) : isError ? (
                    <p>Error loading volunteers</p>
                ) : (
                    <List
                        dataSource={volunteers}
                        renderItem={(item: { name: string }) => (
                            <List.Item>
                                {item.name}
                            </List.Item>
                        )}
                    />
                )}
            </div>


        </div>
    )
}

export default AboutUs