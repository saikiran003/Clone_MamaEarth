import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Hairdatas } from '../Datas/HairData';
import {BestSeller as Data} from '../Datas/HomePage';
import styles from "./Products.module.css";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { addItem } from '../../Kiran Components/redux/action';
import { useDispatch } from 'react-redux';

export const Hair = () => {
const dispatch = useDispatch()
  const navigate = useNavigate();
  const [data, setData] = useState(Hairdatas)

  const handleFilter=(cat)=>{
      const updatedProducts = Hairdatas.filter((el)=> el.category===cat)
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
    dispatch(addItem(cart))
    alert("Product has been added to cart")  
  }

  const handleClick = (e)=>{
    localStorage.setItem("productdesp",JSON.stringify(e));
    navigate('/ProductDesp')
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
       <img src={"https://images.ctfassets.net/66mrrren2unf/OoKYuxKNlL96p4n6uytiG/02aecfff5b2170bf9fab1c1be850e17c/Desktop_Without_CTA.jpg?q=40"} alt="" />
     </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.AOT_coverImg1}>
     <img src={"https://images.ctfassets.net/66mrrren2unf/7dEBxXbTzZNpHkQuBGwTUH/a5dbe423c5569360d02ddd8121419c46/Desktop_Henna-Paste-with-CTA.jpg?q=40"} alt="" />
     </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.AOT_coverImg1}>
     <img src={"https://images.ctfassets.net/66mrrren2unf/69siw2mSt1EipsLdDWtvgW/a2320eaaecd8c9f18be18273ebfffacd/Onion-Oil_1920-512_.jpg?q=40"} alt="" />
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
           <p>Hair care products</p>
          </div>
        </div>
   </div>

   <div className={styles.AOT_productCardSwiper}>
      <h1 className={styles.AOT_categoryhead}>Hair Care Products</h1>
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
            <div onClick={()=>handleClick(item)} className={styles.AOT_productCard1}>
                  <div className={styles.AOT_productImg}>
                  <img src={item.pImg} alt="" />
               </div>
               <div className={styles.AOT_productName}><p>{item.name}</p></div>
               <div style={{marginBottom:"2%", marginTop:"3%"}} className={styles.AOT_productDesp}><p>{item.pShortDec}</p></div>
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
        <select className={styles.AOT_selectmethod} onChange={handleSort}>
          <option value="">sortby</option>
          <option value="rating">Rating</option>
          <option value="hl">Price-High to Low</option>
          <option value="lh">Price-Low to High</option>
        </select>
      </div>
     </div>
     <div className={styles.AOT_productFilter}>
        <button onClick={()=>setData(Hairdatas)}>ALL</button>
        <button onClick={()=>handleFilter("Hair oil")}>Hair oil</button>
        <button onClick={()=>handleFilter("Hair mask")}>Hair Mask</button>
        <button onClick={()=>handleFilter("Hair shampoo")}>Shampoo</button>
        <button onClick={()=>handleFilter("Hair conditioner")}>Conditioner</button>
        <button onClick={()=>handleFilter("Hair serum")}>Serum</button>
     </div>

    </div>

    <div className={styles.AOT_productContainer}>
        {data.map((el)=> {
         return(
           <div onClick={()=>handleClick(el)} key={el.id} className={styles.AOT_productCard}>
               <div className={styles.AOT_productImg}>
                 <img src={el.pImg} alt="" />
               </div>
               <div className={styles.AOT_productName}><p>{el.name}</p></div>
               <div style={{marginBottom:"2%", marginTop:"3%"}} className={styles.AOT_productDesp}><p>{el.pShortDec}</p></div>
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
