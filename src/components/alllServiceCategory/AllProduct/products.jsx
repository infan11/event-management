import banner from '../../../assets/phone/banner.jpeg'
import { useEffect, useState } from "react";
import ProductCategory from './ProductCategory';



const Products= () => {
   
    const [product, setProduct] = useState([]);
   useEffect(() => {
    fetch("/product.json")
    .then(res => res.json())
    .then(data => setProduct(data))
    
   },[])
    return (
        <div>
           <div  data-aos="fade-down">
          <img src={banner} className='mb-10 ' alt="" />
           </div>
           <div data-aos="flip-left">
            <h2 className='text-center bg-white text-2xl text-black w-64 mx-auto font-bold p-3 rounded-md'>All Products</h2>
            <br />
           </div>
         <div className='grid md:grid-cols-3 gap-3'>
          {
           product.map(item => <ProductCategory key={item} item={item}></ProductCategory>)
          }
         </div>
        </div>
    );
};

export default Products;