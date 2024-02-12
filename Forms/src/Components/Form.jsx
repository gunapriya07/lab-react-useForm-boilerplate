import React from "react";
import { useForm } from "react-hook-form";
import './Form.css';

const Form = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting }, } = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
    };

    return (
        <div className='form-container'> 
            {isSubmitSuccessful ? <h2 className="success-msg">Registration Successful..!!!!</h2> :null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", {
                            required: "❗ First name required",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "  ❗Invalid First name",
                            },
                        })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <input 
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", {
                            required: " ❗ Last name required",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "  ❗Invalid Last name",
                            },
                        })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email Id"
                        {...register("email", {
                            required: "❗ Email required",
                            validate: (value) => {
                                if (!value.includes("@")) {
                                    return " ❗Invalid email";
                                } return true;
                            },
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "  ❗Invalid email",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input
                        type="Password"
                        placeholder="Password"
                        {...register("pass", {
                            required: "❗ Password required",
                            minLength: {
                                value: 4,
                                message: " ❗Password must be more than 4 characters",
                            },
                            maxLength: {
                                value: 20,
                                message: " ❗Password cannot be more than 20 characters",
                            }
                        })}
                    />
                    {errors.pass && <p>{errors.pass.message}</p>}
                </div>
                <button className='regBtn' disabled={isSubmitting} type="submit">{isSubmitting ? "Loading":"Register"}</button> 
            </form>
        </div>
    );
};

export default Form;
