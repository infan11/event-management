import { useEffect, useState } from "react";
import BrandCategory from "./BrandCategory";


const Barnds = () => {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("brand.json")
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div>
         <div data-aos="fade-right" className="justify-center mt-16   items-center w-1/2 mx-auto text-white font-bold font-mono" >
         <h2 className="bg-red-700 p-5 text-3xl text-center" >Our Services</h2>


         </div>

         <div className="grid md:grid-cols-3 gap-3 mt-4">
             {
              item.map(items => <BrandCategory key={items.id} items={items}></BrandCategory>)
             }
         </div>
        </div>
    );
};

export default Barnds;