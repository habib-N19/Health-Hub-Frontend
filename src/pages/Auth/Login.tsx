import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { verifyAccessToken } from "../../utils/verifyAccesToken";
import { TUser } from "../../types";
import { setUser } from "../../redux/features/auth/authSlice";
import { Button, Row } from "antd";
import AuthForm from "../../components/inputForm/AuthForm";
import FormInput from "../../components/inputForm/FormInput";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const defaultValues = {
        email: "admin@admin.com",
        password: "123123"
    }
    const [login] = useLoginMutation();
    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Logging in...");
        try {
            const userInfo = {
                email: data.email,
                password: data.password
            }
            const result = await login(userInfo).unwrap();
            console.log('result', result);
            const user = verifyAccessToken(result.token) as TUser;
            dispatch(setUser({ user: user, token: result.token }));
            toast.success("Logged in successfully", { id: toastId, duration: 3000 });
            navigate('/dashboard');



        } catch (error) {
            toast.error('Error logging in', { id: toastId, duration: 3000 });
        }
    }
    return (
        <Row justify='center' align='middle' style={{ height: '100vh' }}>
            <AuthForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <FormInput type="email" label="Email" name="email" />
                <FormInput type="password" label="Password" name="password" />
                <Button htmlType="submit" type="primary">Login</Button>
            </AuthForm>

        </Row>
    );
};

export default Login;