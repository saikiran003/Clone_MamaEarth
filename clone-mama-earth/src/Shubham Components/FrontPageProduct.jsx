import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./SIngleProduct.module.css";
import { Pagination, Navigation } from "swiper";
import {
  BabyCare,
  Colorcare,
  Newlaunches,
  OnionRange,
  singleProduct,
  summerFav,
  UbtanRange,
  VitaminRange,
} from "../Data/Data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Kiran Components/redux/action";

export const Slider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));
    navigate("/ProductDesp");
    console.log(e);
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {singleProduct.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  className={styles.addToCart}
                  onClick={() => handleCart(item)}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export const Onion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));

    navigate("/ProductDesp");
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {OnionRange.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleCart(item)}
                  className={styles.addToCart}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export const Vitamin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));

    navigate("/ProductDesp");
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {VitaminRange.map((item) => {
          return (
            <SwiperSlide>
              <div key={item.id}>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleCart(item)}
                  className={styles.addToCart}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export const Tan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));

    navigate("/ProductDesp");
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {UbtanRange.map((item) => {
          return (
            <SwiperSlide>
              <div key={item.id}>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleCart(item)}
                  className={styles.addToCart}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export const Launches = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));

    navigate("/ProductDesp");
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {Newlaunches.map((item) => {
          return (
            <SwiperSlide>
              <div key={item.id}>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleCart(item)}
                  className={styles.addToCart}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export const Summer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));

    navigate("/ProductDesp");
  };

  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {summerFav.map((item) => {
          return (
            <SwiperSlide>
              <div key={item.id}>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleCart(item)}
                  className={styles.addToCart}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export const Color = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));

    navigate("/ProductDesp");
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {Colorcare.map((item) => {
          return (
            <SwiperSlide>
              <div key={item.id}>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleCart(item)}
                  className={styles.addToCart}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export const Baby = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("productdesp", JSON.stringify(e));

    navigate("/ProductDesp");
  };
  const handleCart = (item) => {
    dispatch(addItem(item));
    alert("Product has been added to Cart");
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "550px" }}
      >
        {BabyCare.map((item) => {
          return (
            <SwiperSlide>
              <div key={item.id}>
                <div>
                  <div
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "indianred",
                      width: "90px",
                      height: "25px",
                      textAlign: "center",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                      paddingTop: "2px",
                    }}
                  >
                    <p style={{ fontSize: "14px" }}>{item.sellerTag}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <a>
                      <img
                        alt="ecommerce"
                        style={{
                          height: "250px",
                          width: "95%",
                          marginTop: "5%",
                        }}
                        src={item.pImg}
                      />
                    </a>
                  </div>
                </div>
                <div style={{ height: "50px", marginBottom: "15px" }}>
                  <p style={{ textAlign: "center", fontSize: "15px" }}>
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center", color: "green" }}>
                    {item.pShortDec}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      width: "300px",
                      marginLeft: "20%",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      ⭐{item.rating}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "100",
                      }}
                    >
                      <img
                        src="https://image.emojisky.com/478/2537478-small.png"
                        style={{ height: "20px", width: "20px" }}
                      />
                      `{item.reviews} Reviews`
                    </p>
                  </div>

                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    {" "}
                    ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleCart(item)}
                  className={styles.addToCart}
                >
                  Add To cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
