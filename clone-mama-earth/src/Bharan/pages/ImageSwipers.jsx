import React, { useState } from 'react'
import './product-image-slider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

const ImageSwipers = props => {

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
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                       <img src={item.Image1} alt="" />
                   </SwiperSlide>
               ))
               
           }

            {
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                       <img src={item.Image2} alt="" />
                   </SwiperSlide>
               ))  
           }
          {
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                       <img src={item.Image3} alt="" />
                   </SwiperSlide>
               ))  
           }
            {
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                       <img src={item.Image4} alt="" />
                   </SwiperSlide>
               ))  
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
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                      <div className="product-images-slider-thumbs-wrapper">
                          <img src={item.Image1} alt="" />
                      </div>
                   </SwiperSlide>
               ))
               
           }

{
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                      <div className="product-images-slider-thumbs-wrapper">
                          <img src={item.Image2} alt="" />
                      </div>
                   </SwiperSlide>
               ))
               
           }

{
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                      <div className="product-images-slider-thumbs-wrapper">
                          <img src={item.Image3} alt="" />
                      </div>
                   </SwiperSlide>
               ))
               
           }

{
               props.images.map((item,index)=>(
                   <SwiperSlide key={index}>
                      <div className="product-images-slider-thumbs-wrapper">
                          <img src={item.Image4} alt="" />
                      </div>
                   </SwiperSlide>
               ))
               
           }

            
      </Swiper>
    </>
}

ImageSwipers.propTypes = {
    Images: PropTypes.array.isRequired
}

export default ImageSwipers