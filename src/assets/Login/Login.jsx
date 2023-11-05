import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import login from './login.json'
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div>
             <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card  rounded-box place-items-center">
                    <div className='max-w-2xl mx-auto'>

                        <h3 className='text-2xl text-center font-bold text-yellow-400 dark:text-white'>Log In Your Account</h3>
                        <form>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-400 dark:text-white ">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-400 dark:text-white ">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />



                            </div>
                            <div className="form-control mt-6">
                                <button className="btn order-blue-400 rounded-lg bg-violet-200 dark:bg-yellow-400  text-white hover:text-black">Login</button>
                                <button className="btn order-blue-400 rounded-lg bg-violet-200 dark:bg-yellow-400  text-white hover:text-black mt-4"><BsGoogle></BsGoogle>Google login</button>

                                <div className='flex items-center gap-4'>
                                    <p className='text-xl text-white dark:text-yellow-400 '>Don't have an account? </p>
                                    <Link to={'/getstart'} className="label-text-alt link link-hover text-yellow-400 dark:text-white text-xl">Register</Link>
                                </div>
                            </div>

                        </form>
                       



                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow  rounded-box place-items-center ">
                    <Lottie className="mx-w-xl md:mx-w-sm "  animationData={login}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Login;