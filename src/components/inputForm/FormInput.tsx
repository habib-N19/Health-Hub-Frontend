import { Input } from "antd";
import { Controller } from "react-hook-form";

export type TFormInputProps = {
    type: string;
    label?: string;
    name: string;
}

const FormInput = ({ type, label, name }: TFormInputProps) => {

    return (
        <div>
            {
                label ? label : null
            }
            <Controller name={name} render={({ field }) => <Input {...field} type={type} id={name} />} />
        </div>
    );
};

export default FormInput;