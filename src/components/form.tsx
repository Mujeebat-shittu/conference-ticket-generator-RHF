import '../index.css';
import Logo from '../assets/logo-full.svg'
import { useNavigate } from 'react-router';
import Upload from "../assets/icon-upload.svg"
import { SubmitHandler, useForm } from "react-hook-form"

type FormValues = {
    fullname: string;
    email: string;
    username: string;
    avatar: FileList | null;   // VERY important for file input
};


function Form() {
    const navigate = useNavigate();
    // const ticket = useForm();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        // reset,
        // getValues - use them for password validation when you need values to match
        setValue,
        watch,

    } = useForm<FormValues>()

    const avatar = watch("avatar"); // watches for uploaded file
    const file = avatar && avatar.length > 0 ? avatar[0] : null;

    const handleRemoveImage = () => {
        setValue("avatar", null); // clears the file from RHF state
    };

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const file = data.avatar?.[0];
        if (!file) return; // avatar is null or empty

        const url = URL.createObjectURL(file);

        navigate("/ticket", {
            state: {
                avatar: url,
                fullname: data.fullname,
                email: data.email,
                username: data.username,
            },
        });
    };



    return (
        <>
            <section className="flex items-center justify-center flex-col h-screen mx-8 my-10 l p-4 text-white">

                <img src={Logo} alt="Logo" className='mt-8' />
                <h1 className="text-4xl font-semibold text-center py-2">Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className='text-lg'>Secure your spot at next year's biggest coding conference</p>
                <form onSubmit={handleSubmit(onSubmit)} className='my-10 flex flex-col gap-4'>

                    <div className="flex gap-2">
                        <label htmlFor="file" className='my-2'>Upload Avatar

                            {file ? (
                                <div className="text-orange-400 text-lg border-(--neutral-700) border-2 rounded-md border-dashed mt-2 mx-auto py-4 px-6 w-full">
                                    File selected: {file.name}

                                    <div className="text-sm text-(--neutral-300) flex gap-5 items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="bg-[hsl(245,19%,25%)] py-1 px-4 my-1 rounded-lg cursor-pointer"
                                        >
                                            Remove Image
                                        </button>

                                        <label
                                            htmlFor="file"
                                            className="bg-[hsl(245,19%,25%)] py-1 px-4 my-1 rounded-lg cursor-pointer"
                                        >
                                            Change Image
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <div className="border-(--neutral-700) border-2 rounded-md border-dashed mt-2 mx-auto p-4 w-full">
                                    <img src={Upload} alt="" className="mx-auto" />
                                    <p>Drag and drop or click to upload</p>
                                </div>
                            )}
                        </label>


                        <input
                            {...register("avatar", {
                                required: "Please upload an image for your avatar",
                                validate: {
                                    fileType: (files) =>
                                        files && ["image/jpeg", "image/png", "image/webp"].includes(files[0]?.type)
                                            ? true
                                            : "Only JPG, PNG, or WEBP files are allowed.",
                                    fileSize: (files) =>
                                        files && files[0]?.size <= 2 * 1024 * 1024 // 2MB
                                            ? true
                                            : "File size must be less than 2MB.",
                                },
                            })}
                            id="file"
                            type="file"
                            accept='image/jpeg,image/png,image/webp'
                            className='hidden'
                        />
                    </div>
                    {errors.avatar && (
                        <p className="text-orange-400">{`${errors.avatar.message}`}</p>
                    )}

                    <div className="flex gap-2 flex-col">
                        <label htmlFor="fullname" className='mt-4 mb-2'>Full Name</label>
                        <input
                            {...register("fullname", {
                                required: "Enter your name"
                            })}
                            id='fullname'
                            type="text"
                            placeholder='John Doe'
                        />
                        {errors.fullname && (
                            <p className="text-orange-400">{`${errors.fullname.message}`}</p>
                        )}
                    </div>


                    <div className="flex gap-2 flex-col">
                        <label htmlFor="email">Email Address</label>

                        <input
                            {...register("email", {
                                required: "Please enter a valid email"
                            })}
                            type="email"
                            id="email"
                            placeholder='johndoe@email.com'

                        />
                        {errors.email && (
                            <p className="text-orange-400">{`${errors.email.message}`}</p>
                        )}
                    </div>

                    <div className="flex gap-2 flex-col">
                        <label htmlFor="username">GitHub Username</label>

                        <input
                            {...register("username", {
                                required: "Please enter your username"
                            })}
                            type="text"
                            id='username'
                            placeholder='@yourusername'
                        />
                    </div>
                    {errors.username && (
                        <p className="text-orange-400">{`${errors.username.message}`}</p>
                    )}


                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`cursor-pointer font-bold text-[16px] w-full border-none border-[5px] p-4 ${isSubmitting ? "bg-(--orange-400) text-gray" : "bg-(--orange-700) text-(--neutral-900)"}`}
                    >
                        Generate My Ticket</button>

                </form>
            </section>
        </>
    )
}

export default Form