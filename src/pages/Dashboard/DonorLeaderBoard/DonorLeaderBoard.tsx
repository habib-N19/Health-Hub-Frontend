/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Typography } from 'antd';
import { useGetDonorsDataQuery } from '../../../redux/features/dashboard/dashboardCrudApi';

const { Title, Text } = Typography;



const DonorLeaderBoard = () => {
    const { data: donors, isLoading } = useGetDonorsDataQuery({});
    if (isLoading) {
        return <div>Loading...</div>
    }

    const columns = donors && Object.keys(donors[0]).map(key => ({
        title: key.charAt(0).toUpperCase() + key.slice(1),
        dataIndex: key,
        key: key,
    }));
    // console.log(donors);
    const dataSource = donors?.map((donor: any, index: any) => ({
        key: index,
        ...donor,
    }));
    return (
        <div style={{ padding: '10%' }}>
            <Title level={2} >
                Leader<span style={{ color: '#1890ff' }}>Board</span>
            </Title>
            {donors && (
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    style={{ margin: '30px auto', minWidth: '70%' }}
                />
            )}
            <Text
                style={{ display: 'block', width: '70%', margin: '40px auto', padding: '15px' }}
            >
                last update on {new Date().toLocaleDateString()}
            </Text>
        </div>
    );
}

export default DonorLeaderBoard;