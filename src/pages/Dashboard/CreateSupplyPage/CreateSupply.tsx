import React from "react";
import { useForm } from "react-hook-form";
import { useCreateSupplyMutation } from "../../../redux/features/dashboard/dashboardCrudApi";

interface FormData {
    category: string;
    title: string;
    amount: string;
    description: string;
    imgUrl: string
}

const CreateSupply: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [createSupply, { isLoading }] = useCreateSupplyMutation();



    const onSubmit = async (data: FormData) => {
        try {
            console.log(data);
            const response = await createSupply(data);

            console.log("Supply created successfully", response);
        } catch (error) {
            console.error("Error creating supply", error);
        }
    };

    return (
        <div>
            <div className="title">Create Supply Post</div>
            <div className='create-supply-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-single-data'>
                        <label htmlFor="image">Image:</label>

                        <input type="text" id="imgUrl" {...register("imgUrl")} />
                        {/* <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" multiple />
                        {imagePreviews.map((preview, index) => (
                            <img key={index} src={preview} alt={`Selected ${index}`} style={{ maxWidth: '100px', marginTop: '10px' }} />
                        ))} */}
                    </div>
                    <div className='form-single-data'>
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" {...register("category")} />
                    </div>
                    <div className='form-single-data'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" {...register("title")} />
                    </div>
                    <div className='form-single-data'>
                        <label htmlFor="amount">Amount:</label>
                        <input type="text" id="amount" {...register("amount")} />
                    </div>
                    <div className='form-single-data'>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" {...register("description")}></textarea>
                    </div>
                    <button type="submit" disabled={isLoading}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateSupply;
