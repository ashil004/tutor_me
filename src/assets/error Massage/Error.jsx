import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div className="hero min-h-screen  " style={{backgroundImage: 'url(https://i.ibb.co/SdmNzRP/404-not-found.gif)'}} >
            
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
      <h3 className="text-5xl text-white font-bold "> Error Page 404 </h3>
      <div className="flex justify-center p-4">
        <Link to={'/'}><button className="btn  btn-outline btn-error"><span className="text-white">Go to Home</span></button></Link>
        </div>
    </div>
    
  </div>
</div>
    );
};

export default Error;