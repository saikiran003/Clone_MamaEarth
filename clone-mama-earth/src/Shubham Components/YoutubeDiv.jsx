import React from "react";

const YoutubeDiv = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "flexwrap",
        gap: "5%",
        width: "80%",
        margin: "auto",
      }}
    >
      <div>
        <iframe
          width="508"
          height="400"
          style={{ borderRadius: "15px" }}
          src="https://www.youtube.com/embed/YROZybuYGUE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div style={{ height: "300px", width: "41.5%", marginTop: "10%" }}>
        <h4 style={{ textAlign: "center", color: "rgb(0,149,203)" }}>
          Our Goodness Promise
        </h4>
        <p
          style={{ textAlign: "center", fontSize: "12px", lineHeight: "22px" }}
        >
          At Mamaearth, we live to spread a little love and goodness every day.
          We believe that goodness isn’t a superpower, nor a special gift, it’s
          inside all of us and it shows in the little choices we make. Our
          mission is to bring you the best of nature through our purest and most
          nurturing products that are made without any toxins or harmful
          chemicals. For us goodness also means being good to the earth. Which
          is why we recycle more plastic than we use and we're PETA Certified -
          which means we never test on animals. This is our #GoodnessInside.
        </p>
        <button
          style={{
            background: "transparent",
            border: "1px solid rgb(0,149,203)",
            width: "120px",
            height: "40px",
            borderRadius: "6px",
            marginLeft: "25%",
          }}
        >
          Shop Now
        </button>{" "}
        <button
          style={{
            backgroundColor: "rgb(0,149,203)",
            border: "1px solid rgb(0,149,203)",
            width: "130px",
            height: "40px",
            borderRadius: "6px",
            color: "white",
          }}
        >
          Our Pledges
        </button>
      </div>
    </div>
  );
};

export default YoutubeDiv;
