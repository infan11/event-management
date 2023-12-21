import { Link } from "react-router-dom";
import image from ".././../assets/pc  build/8030430_3828537.jpg"
const ErrorPage = () => {
    return (
        <div data-aos="fade-down">
        <img className="w-96 h-64 mx-auto min-h-screen" src={image} alt="" />
        <button className="btn btn-block font-bold"><Link to={"/"}>Home</Link></button>
        </div>
    );
};

export default ErrorPage;