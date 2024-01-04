import imageA from "../../../assets/pc  build/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms.jpg"
import imageB from "../../../assets/pc  build/portrait-smiling-young-man-his-dog-park.jpg"
import imageC from "../../../assets/pc  build/young-bearded-man-with-striped-shirt.jpg"
import { FcRating } from "react-icons/fc"
const Reviews = () => {
    return (
        <div>
            <div data-aos="fade-left">
                <h2 className="text-center bg-purple-600 text-white p-3 w-80 mx-auto text-xl font-bold font-mono mt-5">Customer Review</h2>
            </div>
            <div className="grid md:grid-cols-3 ml-16 mt-6 gap-2 ">

                <div data-aos="fade-right" className=" w-64  shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src={imageA} alt="men" className="rounded-md" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mashrafi</h2>
                        <p className="flex items-center"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                       
                    </div>
                </div>
                <div data-aos="fade-down" className=" w-64  shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src={imageB} alt="men" className="rounded-md" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mosfiq</h2>
                        <p className="flex items-center"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                       
                    </div>
                </div>
                <div data-aos="fade-down" className=" w-64  shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src={imageC} alt="men" className="rounded-md" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shakib</h2>
                        <p className="flex items-center"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;