/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DeleteFilled } from "@ant-design/icons";
import { useDeleteSupplyMutation, useUpdateSupplyMutation } from "../../../redux/features/dashboard/dashboardCrudApi";
import { useSuppliesQuery } from "../../../redux/features/supply/supplyApi";
import { Key, useState } from "react";
import { Button, Form, Modal } from "antd";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AllSupplyDashboard = () => {
    const { data, isLoading } = useSuppliesQuery({});
    const [deleteSupply] = useDeleteSupplyMutation();
    const [updateSupply] = useUpdateSupplyMutation();
    const [open, setOpen] = useState(false);
    const [confirmLoading] = useState(false);

    const { register, handleSubmit } = useForm();
    if (isLoading) return <div>Loading...</div>;


    const handleOk = () => {
        setOpen(false);

    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        console.log("Clicked cancel button");
        setOpen(false);
    };

    const onSubmit = async (formData: Record<string, any>) => {
        try {
            // Extract _id from formData
            const { _id, ...supplyData } = formData;
            // Call updateSupply mutation with supply data
            await updateSupply({ _id, supply: supplyData });
            setOpen(false);

        } catch (error) {
            // Handle error
            console.error("Error updating supply", error);

        }
    };

    const deleteSupplies = (_id: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        deleteSupply(_id);
        console.log("delete", _id);
    };

    return (
        <>
            <div className="title">Supplies</div>
            <Link
                style={{ padding: '30px' }}
                to='/dashboard/create-supply'>Add Supply</Link>
            <div className="supliesContainer" style={{ marginTop: "10px" }}>
                <div style={{ overflowX: "auto", width: "100%" }}>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ minWidth: "170px" }}>Title</th>
                                <th style={{ minWidth: "170px" }}>Category</th>
                                <th style={{ minWidth: "170px" }}>Amount</th>
                                <th style={{ minWidth: "170px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item: any, index: Key | null | undefined) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.amount}</td>
                                    <td style={{ display: "flex", gap: "5px" }}>
                                        <button onClick={() => deleteSupplies(item._id)}>
                                            <DeleteFilled />
                                        </button>{" "}
                                        <Button type="primary" onClick={() => handleOpen()}>
                                            Update
                                        </Button>
                                        <Modal
                                            title="Title"
                                            open={open}
                                            onOk={handleOk}
                                            confirmLoading={confirmLoading}
                                            onCancel={handleCancel}
                                        >
                                            <form onSubmit={handleSubmit(onSubmit)}>


                                                <Form.Item label="_id" style={{ display: 'none' }}>
                                                    <input style={{ display: 'none' }}
                                                        {...register("_id")}
                                                        defaultValue={item._id}
                                                    />
                                                </Form.Item>
                                                <Form.Item label="Title">
                                                    <input style={{ padding: '10px  ', borderRadius: '8px', width: '100%' }}
                                                        {...register("title")}
                                                        defaultValue={item.title}
                                                    />
                                                </Form.Item>
                                                <Form.Item label="Category">
                                                    <input style={{ padding: '10px  ', borderRadius: '8px', width: '100%' }}
                                                        {...register("category")}
                                                        defaultValue={item.category}
                                                    />
                                                </Form.Item>
                                                <Form.Item label="Amount">
                                                    <input style={{ padding: '10px  ', borderRadius: '8px', width: '100%' }}
                                                        {...register("amount")}
                                                        defaultValue={item.amount}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit">
                                                        Update
                                                    </Button>
                                                </Form.Item>
                                            </form>
                                        </Modal>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    BL</div>
            </div>
        </>
    );
};

export default AllSupplyDashboard;
