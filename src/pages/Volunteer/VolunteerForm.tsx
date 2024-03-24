/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useAddVolunteerMutation } from '../../redux/features/Volunteer/volunteerAPi';

const VolunteerForm = () => {
    const { id } = useParams<{ id: string }>();
    const [addVolunteer] = useAddVolunteerMutation();
    const { control, handleSubmit } = useForm();

    const onSubmit = (values: any) => {
        addVolunteer({ ...values, opportunityId: id });
    };

    return (
        <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item name="email">
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: 'Email is required' }}
                    render={({ field }) => <Input {...field} placeholder="Email" />}
                />
            </Form.Item>

            <Form.Item name="name">
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => <Input {...field} placeholder="Name" />}
                />
            </Form.Item>
            <Form.Item name="location">
                <Controller
                    name="location"
                    control={control}
                    rules={{ required: 'Location is required' }}
                    render={({ field }) => <Input {...field} placeholder="Location" />}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    );
};

export default VolunteerForm;