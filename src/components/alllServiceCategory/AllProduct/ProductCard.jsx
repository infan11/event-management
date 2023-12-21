import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductCard = () => {

    const { id } = useParams();

    const [item, setItem] = useState(null);
    useEffect(() => {
        fetch("/product.json")
            .then(res => res.json())
            .then(data => {
                const single = data.find(pd => pd.id == id);
                console.log(single)
                setItem(single)
            })

    }, [id])
    const { name, image, price, short_description } = item || {};
  console.log(item);
    return (
        <div className="flex min-h-screen items-center justify-center text-white ">
            <div className="card w-96  bg-black shadow-xl">
  <figure><img src={image} alt="unavailable" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{short_description}</p>
    <div className="">
      <div className="badge badge-outline text-white">{price}</div> 
     
    </div>
    <button className="btn btn-block">Buy Now</button>
  </div>
</div>
        </div>
    );
};

export default ProductCard;