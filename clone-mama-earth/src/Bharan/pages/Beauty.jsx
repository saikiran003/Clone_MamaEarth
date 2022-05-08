import React from 'react'
import { Beautydatas } from '../Datas/BeautyData';
import { BeautyCare as Data } from '../Datas/BeautyData';

import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import styles from "./Products.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const Beauty = () => {
  
    const navigate = useNavigate();
    const [data, setData] = useState(Beautydatas)
  
    const handleFilter=(cat)=>{
        const updatedProducts = Beautydatas.filter((el)=> el.category===cat)
        setData(updatedProducts);
    }
  
    const handleSort = (e)=>{
      const value = e.target.value;
         if(value==="lh"){
           const updatedList = [...data].sort((a,b)=> a.price-b.price)
           setData(updatedList);
          }
          if(value==="hl"){
            const updatedList = [...data].sort((a,b)=> b.price-a.price);
            setData(updatedList);
          }
          if(value==="rating"){
            const updateList = [...data].sort((a,b)=>b.rating-a.rating);
            setData(updateList);
          }
    }
  
    const handleAdd = (cart)=>{
      alert("item added")
      console.log(cart)
    }
  
    return (
     <>
     <div className={styles.AOT_coverImgSwiper}>
     <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className={styles.AOT_coverImg1}>
         <img src={"https://images.ctfassets.net/66mrrren2unf/4usS7VI6DjrDrBwNpl5ngu/580d570b03cf60849ec9682467b3fce4/Desktop.jpg?q=40"} alt="" />
       </div>
          </SwiperSlide>
  
          <SwiperSlide>
          <div className={styles.AOT_coverImg1}>
       <img src={"https://images.ctfassets.net/66mrrren2unf/5dElTf4nIm0q7zDEmWgU4j/bcd1ab0f30ea5fef52e00b2436658dcb/Desktop_Henna-Paste-with-CTA.jpg?q=40"} alt="" />
       </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={styles.AOT_coverImg1}>
       <img src={"https://images.ctfassets.net/66mrrren2unf/OoKYuxKNlL96p4n6uytiG/02aecfff5b2170bf9fab1c1be850e17c/Desktop_Without_CTA.jpg?q=40"} alt="" />
       </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={styles.AOT_coverImg1}>
       <img src={"https://images.ctfassets.net/66mrrren2unf/4ZxCZpdHR9x7MBSqyxGVg2/b118c0c231fcc43c8531479834cba44f/Desktop.jpg?q=40"} alt="" />
       </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={styles.AOT_coverImg1}>
       <img src={"https://images.ctfassets.net/66mrrren2unf/2nFAFSa68RorsrU94U5pO9/90708e3f5bd6f312d9911b63e4977a3e/desktop-body-wash.jpg?q=40"} alt="" />
       </div>
          </SwiperSlide>
          
        </Swiper>
     </div>
     
     <div className={styles.AOT_productTitles}>
          <div className={styles.AOT_Titlehead1}>
           <p onClick={()=>navigate("/Home")}>Home</p>
          </div>
          <div className={styles.AOT_Titlehead2}>
          <div>
            <span><i class="fas fa-angle-right"></i></span>
          </div>
          <div className={styles.AOT_Titlehead3}>
           <p>Beauty care products</p>
          </div>
        </div>
     </div>
  
     <div className={styles.AOT_productCardSwiper}>
        <h1 className={styles.AOT_categoryhead}>Beauty Care Products</h1>
        <h3 className={styles.AOT_sellerTag}>BestSellers</h3>
        <Swiper
              slidesPerView={4}
              spaceBetween={10}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
  
          {Data.map((item)=> {
            return(
              <>
              
              <SwiperSlide key={item.id}>
              <div className={styles.AOT_productCard1}>
                    <div className={styles.AOT_productImg}>
                   <img src={item.pImg} alt="" />
                 </div>
                 <div className={styles.AOT_productName}><p>{item.name}</p></div>
                 <div className={styles.AOT_productDesp}><p>{item.pShortDec}</p></div>
                 <div  className={styles.AOT_productRR}>
                   <div className={styles.AOT_productRating}>
                    <div className={styles.AOT_productInnerRating1}><p>★</p></div>
                    <div className={styles.AOT_productInnerRating2}><p>{item.rating}</p></div>
                   </div>
                   <div className={styles.AOT_productReview}>
                     <div className={styles.AOT_productInnerReview1}>
                       <img src={"https://mamaearth.in/static/mamaearth/verified.svg"} alt="" />
                     </div>
                     <div className={styles.AOT_productInnerReview2}>
                     <p>{item.reviews} Reviews</p>
                     </div>
                   </div>
                 </div>
                 <div className={styles.AOT_productPrice}><p>₹{item.price}</p></div>
                 <div className={styles.AOT_productBtn}>
                   <button onClick={()=>handleAdd(item)}>ADD TO CART</button>
                 </div>
              </div>
              </SwiperSlide>
  
              </>
            )
          })}
           </Swiper>
  
     </div>
      
      <div className={styles.AOT_sortFilter}>
       <div className={styles.AOT_sortfilter1}>
       <div>
          <label>Our Products</label>
        </div>
        <div className={styles.AOT_sortmethod}> 
          <select onChange={handleSort}>
            <option value="">sortby</option>
            <option value="rating">Rating</option>
            <option value="hl">Price-High to Low</option>
            <option value="lh">Price-Low to High</option>
          </select>
        </div>
       </div>
       <div className={styles.AOT_productFilter}>
          <button onClick={()=>setData(Beautydatas)}>ALL</button>
          <button onClick={()=>handleFilter("Hair")}>Hair</button>
          <button onClick={()=>handleFilter("Face")}>Face</button>
          <button onClick={()=>handleFilter("Body")}>Body</button>
       </div>
  
      </div>
  
      <div className={styles.AOT_productContainer}>
          {data.map((el)=> {
           return(
             <div key={el.id} className={styles.AOT_productCard}>
                 <div className={styles.AOT_productImg}>
                   <img src={el.pImg} alt="" />
                 </div>
                 <div className={styles.AOT_productName}><p>{el.name}</p></div>
                 <div className={styles.AOT_productDesp}><p>{el.pShortDec}</p></div>
                 <div  className={styles.AOT_productRR}>
                   <div className={styles.AOT_productRating}>
                    <div className={styles.AOT_productInnerRating1}><p>★</p></div>
                    <div className={styles.AOT_productInnerRating2}><p>{el.rating}</p></div>
                   </div>
                   <div className={styles.AOT_productReview}>
                     <div className={styles.AOT_productInnerReview1}>
                       <img src={"https://mamaearth.in/static/mamaearth/verified.svg"} alt="" />
                     </div>
                     <div className={styles.AOT_productInnerReview2}>
                     <p>{el.reviews} Reviews</p>
                     </div>
                   </div>
                 </div>
                 <div className={styles.AOT_productPrice}><p>₹{el.price}</p></div>
                 <div className={styles.AOT_productBtn}>
                   <button onClick={()=>handleAdd(el)} >ADD TO CART</button>
                 </div>
             </div>
           ) 
          })}
      </div>
  
      </>
    )

}
