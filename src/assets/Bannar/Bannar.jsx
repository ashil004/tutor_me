import Lottie from 'lottie-react';
import bannar from './bannar.json'

const Bannar = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie animationData={bannar} loop={1} className="max-w-sm rounded-lg shadow-2xl" ></Lottie>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;