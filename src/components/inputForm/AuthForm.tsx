import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TAuthFormConfig = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues?: Record<string, any>;
}
type TAuthFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
} & TAuthFormConfig;


const AuthForm = ({ onSubmit, children, defaultValues }: TAuthFormProps) => {
    const formConfig: TAuthFormConfig = {}
    if (defaultValues) {
        formConfig.defaultValues = defaultValues;
    }
    const methods = useForm(formConfig);
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default AuthForm;