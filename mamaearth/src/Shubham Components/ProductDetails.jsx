import React from 'react'
import Productimages from './Productimages'
import styles from "./Style/ProductImage.module.css"
import "swiper/css/bundle";
const ProductDetails = () => {
  return (
    <div>
    <div>
    <div className={styles.productDetails}>
        <div className={styles.pimages}>
          {/* <Productimages/> */}
        </div>
        <div className={styles.pdetails}>
            <h3 style={{textAlign: 'justify',fontWeight:'300',fontSize:'26px',}}>Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml</h3>
            <p style={{textAlign: 'left',fontSize:'20px'}}>Boosts Hair Growth | Adds Strength & Shine</p>
            <div style={{display: 'flex',gap: '3px',}}>
                <p>4.8</p>
                <p>|</p>
                <p>780 Verified Ratings</p>
            </div>
            <p style={{textAlign:'left',color:'#81c340',fontWeight:'600',fontSize:'18px',marginBottom:'0.5%'}}>Price</p>
            <p style={{textAlign:'left',fontWeight:'600',fontSize:'18px'}}>₹ 780</p>
            <p style={{textAlign:'left',fontWeight:'600',fontSize:'18px',fontWeight:'normal',fontSize:'15px'}}>Inclusive of all Taxes</p>
            <p style={{textAlign:'left'}}>Currently in {} Carts</p>
             <img src="https://mamaearthp.imgix.net/wysiwyg/goodness-icons.png" height="50px" width="250px" style={{marginLeft:'-69%'}}/ >

        
        </div>
    </div>
    </div>


    <div className={styles.description}>
      <div>
        <h3 style={{textAlign: 'left'}}>Product Description</h3>
      </div>
   <p style={{textAlign: 'left'}}>
   Introducing your favorite Mamaearth Onion Hair Oil with a new & improved formula for even stronger, smoother, and shinier hair. With its lightweight and non-sticky formulation and oh-so-good fragra
   </p>
    </div>
     
     <div>
 <h3 style={{textAlign: 'left',marginLeft:'5%'}}>What Are The Benefits Of Mamaearth Onion Hair Oil?</h3>
   
    <div className={styles.categoryImages}>
      
     
    <div>
      <img src="https://d15ipfxaz33sol.cloudfront.net/wysiwyg/image010-800x559.jpg" height="190px" width="190px" style={{borderRadius:'10px'}}/>
      <p style={{fontSize:'20px',color:'#81c340'}} >
      Boosts Hair Growth
      </p>
      <p style={{textAlign:'justify',marginLeft:'10px',fontWeight:'350'}}>
      Onion hair oil, in combination with Redensyl, reduces hair fall and makes hair healthy.
      </p>
    </div>
    <div>
      <img src="https://d15ipfxaz33sol.cloudfront.net/wysiwyg/image006.jpg" height="190px" width="190px" style={{borderRadius:'10px'}}/>
      <p style={{fontSize:'20px',color:'#81c340'}}>
      Balances Scalp
      </p>
      <p style={{textAlign:'justify',marginLeft:'10px',fontWeight:'350'}}>
      Castor Oil is known to nourish the scalp. Rich in Vitamin D, Almond Oil provides nutrition to the scalp, making hair healthier and stronger.
      </p>
    </div>
    <div>
      <img src="https://d15ipfxaz33sol.cloudfront.net/wysiwyg/image009.png" height="190px" width="190px" style={{borderRadius:'10px'}}/>
      <p style={{fontSize:'20px',color:'#81c340'}}>
      Adds Strength & Shine
      </p>
      <p style={{textAlign:'justify',marginLeft:'10px',fontWeight:'350'}}>
      Full of nature’s goodness, a blend of nourishing oils such as Sunflower Oil, Amla Oil, Hibiscus Oil, etc. our onion oil makes hair strong from the inside & shinier on the outside.
      </p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ProductDetails