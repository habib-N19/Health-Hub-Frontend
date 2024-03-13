import { Button, Row } from "antd";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AuthForm from "../../components/inputForm/AuthForm";
import FormInput from "../../components/inputForm/FormInput";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setDefaultValue } from "../../redux/features/auth/authSlice";
import { useRegisterMutation } from "../../redux/features/auth/authApi";


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register] = useRegisterMutation();
    const defaultValues = {
        name: "admin",
        email: `admin${Math.floor(Math.random() * 100)}@admin.com`,
        password: "123123",
        confirmPassword: "123123"
    }
    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Registering...");
        try {

            await register({ name: data.name, email: data.email, password: data.password }).unwrap();
            toast.success("Registered successfully", { id: toastId, duration: 3000 });
            dispatch(setDefaultValue({ email: data.email, password: data.password }));
            navigate('/login');
        } catch (error) {
            toast.error('Error registering', { id: toastId, duration: 3000 });
        }

    }



    return (
        <Row justify='center' align='middle' style={{ height: '100vh' }}>
            <AuthForm onSubmit={onSubmit} defaultValues={defaultValues}>


                <SectionTitle title="Register" />
                <FormInput type="text" label="Name" name="name" />
                <FormInput type="email" label="Email" name="email" />
                <FormInput type="password" label="Password" name="password" />
                <FormInput type="password" label="Confirm Password" name="confirmPassword" />
                <Button htmlType="submit" type="primary">Register</Button>
            </AuthForm>


        </Row>
    );
};

export default Register;