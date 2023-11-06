
import Lottie from 'lottie-react'
import singup from './signup.json'
import { Link } from 'react-router-dom';
import { useContext , useState } from "react";
import { AuthContext } from '../provider/Authprovider';
import swal from 'sweetalert';

const Singup = () => {
    const {createUser} = useContext(AuthContext);
    const [registerError,setregisterError] = useState('')
    const [ ragsuss,setragsuss] = useState('')
    const singUpholder = event =>{
        event.preventDefault();
        const from  = event .target ;
        const name = from.name.value ;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from. password.value;
        console.log(name , photo, email, password);
        createUser( email , password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setragsuss( swal('Good job','For your Registration'))
            
        }).Catch(error =>console.log(error));
          setregisterError(errorMessage);


        if (password .length < 8){
            setregisterError('Password must be at least 8 characters long')
            return;
        }else if( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test ( password) ){
            setregisterError('Password must contain at least one number and one uppercase and lowercase letter')
            return;
        }


        setregisterError('')
        setragsuss('')
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
                        {registerError && <p className="text-center text-red-500 p-6">{registerError}</p>}
                       



                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow  rounded-box place-items-center "><Lottie className="mx-w-xl md:mx-w-sm" animationData={singup}></Lottie></div>
            </div>
        </div>
    );
};

export default Singup;