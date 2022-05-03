import React, { useState } from "react";
import { AllProducts } from "../Data/Products";

const Products = () => {
  const [filter,setFilter] = useState(AllProducts)
  
  const handleFilter = (cat)=>{
    const updatedProducts = AllProducts.filter((x)=>x.category===cat)
    setFilter(updatedProducts)
  }
  const handleSort = (e)=>{
    const value = e.target.value;
    console.log(value)
    if(value==="l2h")
    {
      console.log("yes")
      const updatedList = [...filter].sort((a,b)=>a.price-b.price)
      setFilter(updatedList)
    }
    if(value==="h2l")
    {
      const updatedList = [...filter].sort((a,b)=>b.price - a.price)
      setFilter(updatedList)
    }
    if(value==="rating")
    {
      const updatedList = [...filter].sort((a,b)=>b.Rating-a.Rating)
      setFilter(updatedList)
    }
  }
  return (
    <>
      <div className="eagle">
        <div>
          <button className="easter" onClick={()=>setFilter(AllProducts)}>ALL</button>
          <button className="easter" onClick={()=>handleFilter("Hair")}>HAIR</button>
          <button className="easter" onClick={()=>handleFilter("Face")}>FACE</button>
          <button className="easter" onClick={()=>handleFilter("Body")}>BODY</button>
          <button className="easter" onClick={()=>handleFilter("Baby")}>BABY</button>
        </div>

        <div>
          <select className="eclipse" onChange={handleSort}>
            <option value="">Sort By</option>
            <option value="rating">Rating</option>
            <option value="l2h">Price-Low to High</option>
            <option value="h2l">Price-High to Low</option>
          </select>
        </div>
      </div>
      <div className="gallery" >
        {filter.map((item) => {
          return (
            <div className="ghost">
              <img src={item.image} alt={item.name} className="glamour" />
              <div className="grace">{item.name}</div>
              <div className="grade">
                <div className="golf">{item.Rating}</div>
              </div>
              <div className="gun">₹{item.price}</div>
              <button className="gold">ADD TO CART</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
