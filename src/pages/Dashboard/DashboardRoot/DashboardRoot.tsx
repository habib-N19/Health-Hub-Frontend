import { PieChart } from "../../../components/pieChart/PieChart"

import { Typography } from 'antd'
import { useSuppliesQuery } from "../../../redux/features/supply/supplyApi";
const { Title } = Typography
const DashboardRoot = () => {
    const { data: supplies, isLoading } = useSuppliesQuery({});
    if (isLoading) return <div>Loading...</div>
    console.log(supplies, isLoading);
    return (
        <div >
            <Title level={1} style={{ textAlign: 'center', paddingTop: '20px' }}>Overview</Title>

            <div style={{ margin: "10px" }} className="all-content">
                <div className="content-1">
                    {
                        supplies?.map((supply) => (
                            <div key={supply.id} className="content-box">
                                <h1>{supply.title}</h1>
                                <h2>{supply.amount}</h2>
                            </div>
                        ))
                    }

                </div>
                <div className="pie-chart">
                    <PieChart supplies={supplies} ></PieChart>
                </div>
            </div>
        </div>
    )
}

export default DashboardRoot