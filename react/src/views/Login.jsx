import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthContext from '../context/AuthContext'

import logo from '../assets/logo.png'
import { motion } from 'framer-motion'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, errors} = useAuthContext()

    const handleLogin = async (event) => {
        event.preventDefault();
        login({email, password})
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
            <div className='hidden md:block relative '>
                <img className='h-full bg-center object-cover' src='https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80' alt='/'></img>

                <div className='absolute bottom-[2%] left-[50%]'>
                    <h1 className='text-4xl text-orange-500 font-bold my-4'> Turn your cravings into delicious food. </h1>
                    <p className='text-xl text-white font-normal'>Start for free and get attractive offers from the community.</p>
                </div>

            </div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
                className='flex flex-col justify-center bg-[#ffffff]'>
                <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto border-black border-2 p-8 px-8 rounded-lg'>

                    <h2 className='text-3xl text-black text-center flex justify-center'>
                        <img src={logo} alt='/' className='h-10 mr-2' />
                        Best <span className='text-orange-500 mx-2 font-bold'> Eats </span>
                    </h2>

                    <div className='flex flex-col py-2'>
                        <input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            placeholder='Email'
                            className='w-full py-4 bg-transparent border-b border-black outline-none focus:outline-none' />
                    </div>

                    {errors.email &&
                        <div className='flex'>
                            <span className=' text-orange-500 text-sm m-2'>* {errors.email[0]}</span>
                        </div>
                    }

                    <div className='flex flex-col py-2'>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            placeholder='Password'
                            className='w-full py-4 bg-transparent border-b border-black outline-none focus:outline-none' />
                    </div>

                    {errors.password &&
                        <div className='flex'>
                            <span className=' text-orange-500 text-sm m-2'>* {errors.password[0]}</span>
                        </div>
                    }

                    <div className='flex justify-between'>
                        <p className='flex items-center'> <input className='mr-2' type='checkbox' /> Remember Me </p>
                        <p className='cursor-pointer'> Forgot Password?</p>
                    </div>

                    <div className='w-full flex flex-col py-4'>
                        <button className='w-full my-1 text-white  font-semibold bg-[#060606] rounded-full p-4 text-center flex items-center justify-center'>
                            Login
                        </button>

                        <Link to='/register'>
                            <button className='w-full my-1 text-[#060606]  font-semibold bg-white border-1 border-black rounded-full p-4 text-center flex items-center justify-center'>
                                Register
                            </button>
                        </Link>
                    </div>

                    <div className='w-full flex items-center justify-center relative my-4'>
                        <div className='w-full h-[1px] bg-black'>
                        </div>
                        <p className=' h-[28px] text-[15px] absolute text-black/80 bg-[#ffffff]'>or</p>
                    </div>

                    <button className='w-full text-[#060606] my-1 font-semibold bg-white border-1 border-black rounded-full p-4 text-center flex items-center justify-center'>
                        <img src='https://freesvg.org/img/1534129544.png' alt='/' className='h-6 mr-2' />
                        Sign In with Google
                    </button>

                    {/* <button className='w-full my-1 bg-black shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 font-semibold text-black rounded-full'>Sign In</button>
                    <button className='w-full my-1 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 font-semibold text-black rounded-full'>Register</button> */}
                    <div className='w-full flex items-center justify-center'>
                        <p className='text-sm font-normal text-[060606] mt-4'>Dont have a account?
                            <Link to="/register">
                                <span className='font-semibold underline underline-offset-2 cursor-pointer'> Sign up for Free</span>
                            </Link>
                        </p>
                    </div>
                </form>

            </motion.div>
        </div>



    )
}

export default Login