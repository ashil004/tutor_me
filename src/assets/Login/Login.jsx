import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import login from './login.json'
import { BsGoogle } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { GoogleAuthProvider,  getAuth, signInWithPopup, } from "firebase/auth";
import app from "../Firebase/firebase.config";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const loginHolder = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from . email.value ;
        const password = from . password.value;
        // const loginData = { };
        console.log(email,password);
        signIn( email ,password)
        .then( result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(error => console.log(error));
  
    }
    const logingwithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const Auth  = getAuth(app);
        signInWithPopup(Auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setmanages(user.email);


            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

        })
    
    }
    

    return (
        <div>
             <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card  rounded-box place-items-center">
                    <div className='max-w-2xl mx-auto'>

                        <h3 className='text-2xl text-center font-bold text-yellow-400 dark:text-white'>Log In Your Account</h3>
                        <form onSubmit={loginHolder}>
                            
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
                                <button onClick={logingwithGoogle} className="btn order-blue-400 rounded-lg bg-violet-200 dark:bg-yellow-400  text-white hover:text-black mt-4"><BsGoogle></BsGoogle>Google login</button>

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