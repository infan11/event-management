import { Link } from "react-router-dom";


const ProductCategory = ({item}) => {
    const { id, name,image,price, short_description } = item;

       
    return (
        <div className="">
            <div  data-aos="flip-right" className="  w-9/12 mx-auto shadow-xl">
  <figure><img src={image} alt="phone unavialable"className=" h-96 rounded-xl" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{id}</div>
    </h2>
    <p>{short_description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{price}</div> 
      <div className="badge badge-outline">{}</div>
    </div>
  </div>
</div>
<Link  to={`/productCard/${id}`} >
<button>BUY NOW</button>
</Link>
        </div>
    );
};

export default ProductCategory;