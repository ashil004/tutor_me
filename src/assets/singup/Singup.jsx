
import Lottie from 'lottie-react'
import singup from './signup.json'
import { Link } from 'react-router-dom';

const Singup = () => {
    const singUpholder = event =>{
        event.preventDefault();
        const from  = event .target ;
        const name = from.name.value ;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from. password.value;
        const singupData ={ name , photo, email, password};
        console.log(singupData);
    }
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card  rounded-box place-items-center">
                    <div className='max-w-2xl mx-auto'>

                        <h3 className='text-2xl text-center font-bold text-yellow-400 dark:text-white '>Register your account</h3>
                        <form onSubmit={singUpholder}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-400 dark:text-white">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-400 dark:text-white">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-yellow-400 dark:text-white">Email</span>
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
                                <button className="btn order-blue-400 rounded-lg bg-violet-200 dark:bg-yellow-400  text-white hover:text-black">Register</button>

                                <div className='flex items-center gap-4'>
                                    <p className='text-xl text-white dark:text-yellow-400 '>Already You have an Account? </p>
                                   <Link to={'/login'}  className="label-text-alt link link-hover text-yellow-400 dark:text-white  text-xl">Login</Link>
                                </div>
                            </div>

                        </form>
                       



                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow  rounded-box place-items-center "><Lottie className="mx-w-xl md:mx-w-sm" animationData={singup}></Lottie></div>
            </div>
        </div>
    );
};

export default Singup;