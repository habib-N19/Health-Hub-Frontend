import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Form, Typography } from 'antd';
import { useCreateTestimonialMutation } from '../../../redux/features/dashboard/dashboardCrudApi';

interface FormData {
    imageUrl: string;
    title: string;
    description: string;
    userName: string;
    email: string;
}
const { Title } = Typography;
const Testimonial: React.FC = () => {
    const { control, handleSubmit } = useForm<FormData>();
    const [createTestimonial] = useCreateTestimonialMutation();

    const onSubmit = (data: FormData) => {
        createTestimonial(data);
    };

    return (
        <Form style={{ height: '100vh', padding: '20px' }} onFinish={handleSubmit(onSubmit)}>

            <Title style={{ marginBottom: '3rem' }} level={2}>Create Testimonial</Title>

            <Controller
                name="imageUrl"
                control={control}

                defaultValue=""
                render={({ field }) => <Input style={{ marginBottom: '1rem' }} {...field} placeholder="Image URL" />}
            />

            <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => <Input style={{ marginBottom: '1rem' }} {...field} placeholder="Title" />}
            />
            <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => <Input.TextArea style={{ marginBottom: '1rem' }} {...field} placeholder="Description" />}
            />

            <Controller
                name="userName"
                control={control}
                defaultValue=""
                render={({ field }) => <Input style={{ marginBottom: '1rem' }} {...field} placeholder="User Name" />}
            />
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <Input style={{ marginBottom: '1rem' }} {...field} placeholder="Email" />}
            />

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Testimonial;