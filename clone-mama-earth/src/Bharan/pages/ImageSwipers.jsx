import React, { useState } from 'react'
import './product-image-slider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

const ImageSwipers = props => {

    const updatedData = JSON.parse(localStorage.getItem("productdesp"))
    console.log(updatedData);

    console.log(props)
    // const[activeThumb, setActiveThumb] = useState()

  return <>
    
      <Swiper 
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
    //   thumbs={{swiper: activeThumb}}
      className="product-images-slider"
      
      >
           {
               
                   <SwiperSlide key={updatedData.id}>
                       <img src={updatedData.pImg1} alt="" />
                   </SwiperSlide>
            
               
           }

            {
              
              <SwiperSlide key={updatedData.id}>
              <img src={updatedData.pImg2} alt="" />
               </SwiperSlide>
           }
          {
               
               <SwiperSlide key={updatedData.id}>
               <img src={updatedData.pImg3} alt="" />
               </SwiperSlide>
           }
            {
               
               <SwiperSlide key={updatedData.id}>
               <img src={updatedData.pImg4} alt="" />
               </SwiperSlide>
           }
      </Swiper>

      <Swiper 
    //   onSwiper={setActiveThumb}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      className="product-images-slider-thumbs"
      
      >
           {
              
              <SwiperSlide key={updatedData.id}>
              <img src={updatedData.pImg1} alt="" />
               </SwiperSlide>
               
           }

{
               
               <SwiperSlide key={updatedData.id}>
               <img src={updatedData.pImg2} alt="" />
                </SwiperSlide>
               
           }

{
               
               <SwiperSlide key={updatedData.id}>
               <img src={updatedData.pImg3} alt="" />
               </SwiperSlide>
               
           }

{
              
              <SwiperSlide key={updatedData.id}>
              <img src={updatedData.pImg4} alt="" />
              </SwiperSlide>
               
           }

            
      </Swiper>
    </>
}

ImageSwipers.propTypes = {
    Images: PropTypes.array.isRequired
}

export default ImageSwipers