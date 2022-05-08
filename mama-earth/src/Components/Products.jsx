import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AllProducts } from "../Data/Products";
import { addItem } from "../redux/action";

const Products = () => {
  const [filter, setFilter] = useState(AllProducts);
  const dispatch = useDispatch();

  const handleFilter = (cat) => {
    const updatedProducts = AllProducts.filter((x) => x.category === cat);
    setFilter(updatedProducts);
  };
  const handleSort = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "l2h") {
      console.log("yes");
      const updatedList = [...filter].sort((a, b) => a.price - b.price);
      setFilter(updatedList);
    }
    if (value === "h2l") {
      const updatedList = [...filter].sort((a, b) => b.price - a.price);
      setFilter(updatedList);
    }
    if (value === "rating") {
      const updatedList = [...filter].sort((a, b) => b.rating - a.rating);
      setFilter(updatedList);
    }
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to cart")
  };

  return (
    <>
      <div>
        <img
          src="https://images.ctfassets.net/66mrrren2unf/5p5pVTewrOIcFmKeO0vbEP/d886f4c2e472aee62bc560a49fcca57d/Website_Banner.jpg?q=40"
          alt="shetty" style={{width:"100%"}}
        />
      </div>
      <div className="egg">
        <p>Home/Shop</p>
      </div>
      <div className="eagle">
        <div>
          <button className="easter" onClick={() => setFilter(AllProducts)}>
            ALL
          </button>
          <button className="easter" onClick={() => handleFilter("Hair")}>
            HAIR
          </button>
          <button className="easter" onClick={() => handleFilter("Face")}>
            FACE
          </button>
          <button className="easter" onClick={() => handleFilter("Body")}>
            BODY
          </button>
          <button className="easter" onClick={() => handleFilter("Baby")}>
            BABY
          </button>
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
      <div className="gallery">
        {filter.map((item) => {
          return (
            <div className="ghost">
              <img src={item.pImg} alt={item.name} className="glamour" />
              <div className="gavin">{item.sellerTag}</div>
              <div className="grace">{item.name}</div>
              <div className="great">{item.pShortDec}</div>
              <div className="guts">
                <div className="grade">
                  <i class="fa fa-star fa-14x g" aria-hidden="true"></i>
                  <div className="golf">{item.rating}</div>
                </div>
                <div className="genius"></div>
                <img
                  src="https://mamaearth.in/static/mamaearth/verified.svg"
                  alt="verified"
                  style={{ height: "16px", width: "16px" }}
                />
                <div className="golf">{item.reviews} Reviews</div>
              </div>

              <div className="gun">₹{item.price}</div>
              <button className="gold" onClick={() => handleCart(item)}>
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
