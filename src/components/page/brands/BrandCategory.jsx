import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const BrandCategory = ({items}) => {
  const {user} = useContext(AuthContext)
    const {id, name, image, short_description} = items; 
   
    return (
        <div >
            
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card mx-auto  w-80   rounded-xl  hover:text-orange-600  shadow-2xl mb-7 mt-10">
  <figure className="px-5 pt-5">
    <img src={image} alt="unavilable" className="rounded-2xl h-64  " />
  </figure>                                                                                                                                                                                              
  <div data-aos="zoom-in" className="card-body ">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <p className="font-bold" >{short_description}</p>
    <div className="card-actions">
    <button className="btn btn-primary"> <Link to={"/products"}>Details</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandCategory;