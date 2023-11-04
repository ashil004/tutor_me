import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/KLy7jSN/pexels-pixabay-433333.jpg)' }}>
            <div className="max-w-7xl mx-auto" >
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;