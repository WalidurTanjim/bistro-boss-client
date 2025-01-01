import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import SocialLogIn from '../../components/SocialLogIn/SocialLogIn';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [createPasswordErrMsg, setCreatePasswordErrMsg] = useState('');
    const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const passRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const navigate = useNavigate();


    const onSubmit = (data) => {
        setCreatePasswordErrMsg('');
        setConfirmPasswordErrMsg('');
        setErrMsg('');

        // validate password
        if(!passRegEx.test(data.createPassword)){
            return setCreatePasswordErrMsg('Password must be uppercase, lowercase, digits, special char & min 6 chars')
        }
        if(data.createPassword !== data.confirmPassword){
            return setConfirmPasswordErrMsg('Both are not equal');
        }

        // create user
        createUser(data.email, data.confirmPassword)
        .then(result => {
            const user = result?.user;
            updateUserProfileHandler(user, data.fullname);
            console.log('Create user:', user);
            navigate('/');
        })
        .catch(err => {
            console.error(err);
            setErrMsg(err?.message)
        })
    }

    // updateUserProfileHandler
    const updateUserProfileHandler = (user, fullname) => {
        updateUserProfile(user, fullname)
        .then(() => {
            toast.success('User profile updated');
        })
        .catch(err => {
            console.error(err);
            setErrMsg(err?.message);
        })
    }

    return (
        <section className='sign-up container mx-auto px-6 py-10'>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                        <img className="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="" />

                        <h1 className="mt-3 text-2xl font-medium text-gray-800 capitalize sm:text-3xl dark:text-white">Sign Up</h1>

                        {/* fullname field */}
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name" {...register("fullname", { required: true })} />
                        </div>

                        {/* email field */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" {...register("email", { required: true })} />
                        </div>

                        {/* create password filed */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type={showPassword ? 'text' : 'password'} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Create Password" {...register("createPassword", { required: true })} />
                        </div>
                        {createPasswordErrMsg ? <p className='text-xs text-red-500 ps-4 mt-1'>{createPasswordErrMsg}</p> : undefined}

                        {/* confirm password filed */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type={showPassword ? 'text' : 'password'} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />
                        </div>
                        {confirmPasswordErrMsg ? <p className='text-xs text-red-500 ps-4 mt-1'>{confirmPasswordErrMsg}</p> : undefined}

                        {/* phone field */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="number" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phone Number" {...register("phone", { required: true })} />
                        </div>

                        {/* errMsg */}
                        {errMsg ? <p className='text-xs text-red-500 ps-4 mt-4'>{errMsg}</p> : undefined}

                        {/* show password div starts */}
                        <div className="mt-4 flex items-center justify-between text-sm">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" onClick={()=>setShowPassword(!showPassword)} />
                                <span>Show Password</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Sign up</button>

                            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign up with</p>

                            <SocialLogIn buttonText="Sign up" />

                            <div className="mt-6 text-center ">
                                <Link to="/sign-in" className="text-sm text-blue-500 hover:underline dark:text-blue-400">Already have an account? Sign in</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default SignUp;