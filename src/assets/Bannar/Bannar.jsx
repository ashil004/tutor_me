import Lottie from 'lottie-react';
import bannar from './bannar.json';
import { useTypewriter , Cursor } from "react-simple-typewriter";
import { Link } from 'react-router-dom';

const Bannar = () => {
    const [TypingWriter] = useTypewriter ({
        words:["Tutor Me!","Friends!","Gays! "],
        loop:{},
        typeSpeed:100,
        deleteSpeed:60
    })
    console.log(TypingWriter);
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{backgroundImage:'url(https://i.ibb.co/KrBdhX3/pexels-keira-burton-6146978.jpg)'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie animationData={bannar}  className="max-w-sm rounded-lg shadow-2xl" ></Lottie>
                    <div>
                        <h1 className="text-5xl font-bold  text-blue-400 dark:text-white  ">Welcome to <span className='text-yellow-700'>{TypingWriter}<Cursor cursorStyle="|" cursorColor='red'></Cursor></span></h1>
                        <p className='py-6 text-white dark:text-red-500'>Welcome to our online community, where your journey begins. Explore, connect, and discover with us!</p>
                        <div className='flex justify-center'>
                            <Link to={'/getstart'}><button className="btn btn-primary  dark:bg-yellow-400  "><span className='dark:text-black'>Get Started</span></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;