import React, { useState } from 'react'
import * as Yup from 'yup'
import Formheader from '../components/formheader'
import Forms from '../components/forminputs'
import '../index.css'
import '../components/inputsstyle.css'
import '../components/headerstyle.css'
import { Link, useNavigate } from 'react-router-dom'
import apiService from '../services/api'











const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");


    // validation schema
    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),


    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        };
        validateField(name, value);
    };

    // show validation error
    const validateField = async (name, value) => {
        try {
            await validation.validateAt(name, { [name]: value });
            setError('');
        } catch (err) {
            setError(err.message);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('')
        try {
            // validate form data
            await validation.validate(formData, { abortEarly: false });

            const response = await apiService.loginMember(formData);


            if (response.success) {
                setMessage(response.message);
                // Store token
                localStorage.setItem('authToken', response.data.token);

                setSuccess(true);
                setFormData({
                    email: '',
                    password: '',
                });


                // Redirect to dashboard or home page after successful login
                navigate('/dashboard/home');
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setErrors(err.errors[0])
            } else {
                setError(err.message || 'Login failed');
            }

        } finally {
            setLoading(false)
        }
    };



    return (
        <div className="max-h-screen overflow-hidden">
            {success && (
                <div className={`border-green-400 border-2 text-center w-full items-center justify-center text-black-700`}>
                    {`${message}${","}Redirecting to dashboard.`}
                </div>
            )}



            <div className=" flex-col-1 md:flex gap-45 justify-center rounded-4 mt-[1rem] mx-auto shadow-black-300 w-full ">


                <div className="right justify-around items-stretch">
                    <img src="/Mask group.png" alt="" />
                    <img src="/Mask group2.png" alt="" />
                    <img src="/Mask group1.png" alt="" />
                </div>
                <div className="left ml-3">
                    <div><img src="public/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></div>
                    {error && (
                        <div className="border-red-500 border-2 p-2 rounded-md mb-2 w-full text-center">
                            {error + `! check your password`}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <Formheader headers="log in" />
                        {error.form && <p className="text-red-500 text-center">{error.form}</p>}


                        <div className="mb-1">
                            <label className="text-[#344277] uppercase" htmlFor="email">{`email`}</label>
                            <br />
                            <input type="email" onChange={handleInputChange} autoComplete='email' required value={formData.email} name="email" placeholder="enter your email"
                                className="bg-gradient-to-r w-full placeholder:opacity-50 from-gray-100 to-gray-200 rounded-2xl p-2 " />
                            {error.email && (<p className="text-red-500 text-sm mt-1">{error.email}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="text-[#344277] uppercase" htmlFor="password">{`password`}</label>
                            <br />
                            <input type="password" onChange={handleInputChange} autoComplete='current-password' required value={formData.password} name="password" placeholder="enter your password"
                                className={`bg-gradient-to-r w-full placeholder:opacity-50 from-gray-100 to-gray-200 rounded-2xl p-2 `} />
                            {error.password && (
                                <p className="text-red-500 text-sm mt-1">{error.password}</p>

                            )}
                        </div>



                        <button
                            type='submit'
                            disabled={loading}
                            className='items-center w-full rounded-xl bg-orange-500 text-white py-2 px-4 rounded-2xl hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-30 disabled:cursor-not-allowed transition duration-200'
                        >
                            {loading ? 'logging in' : 'log in'}
                        </button>


                    </form>
                    <div className='justify-center grid capitalize border-t-[2px] mt-[2rem]'>
                        <span className='flex mt-[-0.8rem] bg-[#ffffff]'>
                            <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20210618182605%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" alt="" />
                            <p>google</p>

                        </span>

                    </div>
                    <p className='text-xl mt-7'>don't have an account yet ?
                        <span className='text-[#223399] capitalize'>
                            <Link to="/register" > sign up</Link>
                        </span>
                    </p>


                </div>
            </div>
        </div>
    )
};

export default Login
