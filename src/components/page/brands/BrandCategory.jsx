import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const BrandCategory = ({items}) => {
  const {user} = useContext(AuthContext)
    const {id, name, image, short_description} = items; 
    const handleDetail = () =>{
     
    }
    return (
        <div >
            
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-96 bg-white   hover:text-orange-600     shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="unaviable" className="rounded-2xl h-64" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <p className="font-bold" >{short_description}</p>
    <div className="card-actions">
      <button onClick={handleDetail} className="btn  btn-block">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandCategory;