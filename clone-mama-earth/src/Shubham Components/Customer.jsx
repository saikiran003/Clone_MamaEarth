import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navigation, Pagination } from "swiper";
const Customer = () => {
  return (
      <>
      <h2 style={{textAlign: 'center',}}>What Customer Says</h2>
      <div style={{width: '320px',height:'0px',border: '0.5px solid black',marginLeft:'39.5%',marginBottom:'3%'}}></div>
      <div style={{width: '100%'}}> 
      <img src="https://mamaearthp.imgix.net/wysiwyg/ctgry_background.png?auto=format" width="100%" height="500px" />
      </div>
    <div style={{marginTop:'-33%'}}>
        <Swiper
        
        slidesPerView={1}
        //centeredSlides={false}
        slidesPerGroupSkip={1}
        //grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
        //scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{height:"350px",width:"300px",boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}> 
              <p style={{textAlign: 'center'}}>
                  i use the onion shampoo , Onion Hair mask, Onion hair serum,Ubtan face wash,root hair oil, and many more. 
                  i haev been using the product for ALMOST six months now and i've literally got result that I've never got from 
                  any other brands(specilly hair care product).I love that the products are completely natural
              </p>
              <div style={{display: "flex" ,width:'90%',margin:'auto' }}>
                  <img src="https://mamaearthp.imgix.net/wysiwyg/Gina_kPv81T7.jpg?auto=format" height="120px" width="120px"style={{borderRadius:'50%'}}/>
                  <div>
                      <p>Gina</p>
                  <p style={{backgroundColor:'green',color:'white',height:'30px',width:'50px',borderRadius:'5px',marginTop:"26px",marginLeft:"10px"}}>5.0⭐</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:"350px",width:"300px",boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}> 
              <p style={{textAlign: 'center'}}>
                  i use the onion shampoo , Onion Hair mask, Onion hair serum,Ubtan face wash,root hair oil, and many more. 
                  i haev been using the product for ALMOST six months now and i've literally got result that I've never got from 
                  any other brands(specilly hair care product).I love that the products are completely natural
              </p>
              <div style={{display: "flex" ,width:'90%',margin:'auto' }}>
                  <img src="https://mamaearthp.imgix.net/wysiwyg/Waris_Raza_0nBcBhl.jpg?auto=format" height="120px" width="120px"style={{borderRadius:'50%'}}/>
                  <div>
                      <p>Raja waris</p>
                  <p style={{backgroundColor:'green',color:'white',height:'30px',width:'50px',borderRadius:'5px',marginTop:"26px",marginLeft:"10px"}}>5.0⭐</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:"350px",width:"300px",boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}> 
              <p style={{textAlign: 'center'}}>
                  i use the onion shampoo , Onion Hair mask, Onion hair serum,Ubtan face wash,root hair oil, and many more. 
                  i haev been using the product for ALMOST six months now and i've literally got result that I've never got from 
                  any other brands(specilly hair care product).I love that the products are completely natural
              </p>
              <div style={{display: "flex" ,width:'90%',margin:'auto' }}>
                  <img src="https://mamaearthp.imgix.net/wysiwyg/Manisha_tulV4fo.jpg?auto=format" height="120px" width="120px"style={{borderRadius:'50%'}}/>
                  <div>
                      <p> Manisha </p>
                  <p style={{backgroundColor:'green',color:'white',height:'30px',width:'50px',borderRadius:'5px',marginTop:"26px",marginLeft:"10px"}}>5.0⭐</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height:"350px",width:"300px",boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}> 
              <p style={{textAlign: 'center'}}>
                  i use the onion shampoo , Onion Hair mask, Onion hair serum,Ubtan face wash,root hair oil, and many more. 
                  i haev been using the product for ALMOST six months now and i've literally got result that I've never got from 
                  any other brands(specilly hair care product).I love that the products are completely natural
              </p>
              <div style={{display: "flex" ,width:'90%',margin:'auto' }}>
                  <img src="https://mamaearthp.imgix.net/wysiwyg/Tanmaya_Shrivastav_JbDYODv.jpg?auto=format" height="120px" width="120px"style={{borderRadius:'50%'}}/>
                  <div>
                      <p>Tanmaya Shrivastav</p>
                  <p style={{backgroundColor:'green',color:'white',height:'30px',width:'50px',borderRadius:'5px',marginTop:"26px",marginLeft:"10px"}}>5.0⭐</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
       <SwiperSlide>
          <div style={{height:"350px",width:"300px",boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}> 
              <p style={{textAlign: 'center'}}>
                  i use the onion shampoo , Onion Hair mask, Onion hair serum,Ubtan face wash,root hair oil, and many more. 
                  i haev been using the product for ALMOST six months now and i've literally got result that I've never got from 
                  any other brands(specilly hair care product).I love that the products are completely natural
              </p>
              <div style={{display: "flex" ,width:'90%',margin:'auto' }}>
                  <img src="https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh_gHqZqXk.jpg?auto=format" height="120px" width="120px"style={{borderRadius:'50%'}}/>
                  <div>
                      <p> Priyanshi Singh </p>
                  <p style={{backgroundColor:'green',color:'white',height:'30px',width:'50px',borderRadius:'5px',marginTop:"26px",marginLeft:"10px"}}>5.0⭐</p>
                  </div>
              
              </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
    </>
  )
}

export default Customer