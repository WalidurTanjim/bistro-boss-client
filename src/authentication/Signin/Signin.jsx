import React, { useEffect, useState } from 'react';
import SocialLogIn from '../../components/SocialLogIn/SocialLogIn';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const onSubmit = (data) => {
        setErrMsg('');
        setCaptchaValue('');

        console.log(data);
    }

    return (
        <section className='sign-in container mx-auto px-6 py-10'>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                        <img className="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="" />

                        <h1 className="mt-3 text-2xl font-medium text-gray-800 capitalize sm:text-3xl dark:text-white">Sign In</h1>

                        {/* email field */}
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" {...register("email", { required: true })} />
                        </div>

                        {/* password filed */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type={showPassword ? 'text' : 'password'} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" {...register("password", { required: true })} />
                        </div>

                        {/* captcha field */}
                        <div className='mt-4'>
                            <div className="block w-full py-3 text-gray-700 bg-gray-50 border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                <LoadCanvasTemplate />
                            </div>

                            <div className="relative flex items-center mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Type Captcha" onBlur={e => setCaptchaValue(e.target.value)} {...register("typeCaptcha", { required: true })} />
                            </div>
                        </div>

                        {/* errMsg */}
                        {errMsg ? <p className='text-xs text-red-500 ps-4 mt-4'>{errMsg}</p> : undefined}

                        {/* show password & forget password div starts */}
                        <div className="mt-4 flex items-center justify-between text-sm">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" onClick={()=>setShowPassword(!showPassword)} />
                                <span>Show Password</span>
                            </div>

                            <p className='text-blue-500 hover:text-blue-600 active:text-blue-500 cursor-default underline'>Forget Password</p>
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Sign in</button>

                            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

                            <SocialLogIn buttonText="Sign in" />

                            <div className="mt-6 text-center ">
                                <Link to="/sign-up" className="text-sm text-blue-500 hover:underline dark:text-blue-400">Don't have an account? Sign up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default Signin;