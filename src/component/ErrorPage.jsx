import image from "../assets/404.png"
import Navbar from "./Navbar";
const ErrorPage = () => {
    return (
        <div className="text-center px-6 my-8"> 
            <Navbar></Navbar>
            <p className="text-lg font-inter font-medium text-orange-600 ">Page not found</p> 
            <img src={image} alt="" className="mx-auto"/>

        </div>
    );
};

export default ErrorPage;