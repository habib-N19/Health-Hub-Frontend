/* eslint-disable @typescript-eslint/no-explicit-any */

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ supplies }) => {

    const generateRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;
    };
    const categories = supplies.map((supply: { category: any; }) => supply.category);
    const amounts = supplies.map((supply) => parseInt(supply.amount)); // Assuming amount is a string representing an integer

    // Generating random colors for each category
    const backgroundColors = categories.map(() => generateRandomColor());

    const data = {
        labels: categories,
        datasets: [
            {
                data: amounts,
                backgroundColor: backgroundColors,
                borderWidth: 1,
            },
        ],
    };


    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <>
            <div className="pie-chart-container">
                <div style={{ maxWidth: "400px" }}>
                    <Pie data={data} options={options} />
                </div>
                <div style={{ display: "flex", gap: "20px", flexDirection: "column", width: "200px", flexShrink: "0" }}>
                    {supplies.map((data, index) => (
                        <div key={index}>
                            <span
                                style={{
                                    backgroundColor: backgroundColors[index],
                                    padding: "3px 6px",
                                    fontSize: "20px",
                                }}
                            >
                                {data.category}
                            </span>{" "}
                            <span style={{ fontSize: "20px" }}>{data.amount}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
