import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./widget.css"; // Ensure you import the CSS file
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMediaQuery from "./MediaQuery";

const Widget = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="custom-arrow custom-next"
        style={{ ...style }}
        onClick={onClick}
      >
        <ArrowForwardIcon
          style={{ fontSize: isMobile ? "65px" : "50px", color: "#80878E" }}
        />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="custom-arrow custom-prev"
        style={{ ...style }}
        onClick={onClick}
      >
        <ArrowBackIcon
          style={{ fontSize: isMobile ? "65px" : "50px", color: "#80878E" }}
        />
      </div>
    );
  };
  const data = [
    {
      num: "01",
      title: "Create Brand Profile",
      desc: "Register your company and industry details",
      image:"https://www.calconic.com/user/themes/calconic/images/step-1.webp"
        // "https://images.squarespace-cdn.com/content/65bccc6ee546664e7822619e/cea7662b-8fb9-4d92-8c5b-e4ab83c3cb68/S1+Create+Profile.png?content-type=image%2Fpng",
    },
    {
      num: "02",
      title: "Select your Package",
      desc: "Select calculator pack and customise your calculators with your brand colours",
      image:"https://www.calconic.com/user/themes/calconic/images/step-1.webp"
        // "https://images.squarespace-cdn.com/content/65bccc6ee546664e7822619e/a335ec86-edfb-43a1-99a2-f15035900835/S2+Select+Package.png?content-type=image%2Fpng",
    },
    {
      num: "03",
      title: "Set-up Payment Method",
      desc: "Complete your subscription payment details",
      image:"https://www.calconic.com/user/themes/calconic/images/step-1.webp"
        // "https://images.squarespace-cdn.com/content/65bccc6ee546664e7822619e/43eca5d4-c8c6-4d16-95c4-709dbdda78e7/S3+Setup+Payment.png?content-type=image%2Fpng",
    },
    {
      num: "04",
      title: "Package customisation",
      desc: "We style your calculators so that it seamlessly fits into your website design.",
      image:"https://www.calconic.com/user/themes/calconic/images/step-1.webp"
        // "https://images.squarespace-cdn.com/content/65bccc6ee546664e7822619e/79b94d1c-9cdd-4b2a-99cc-84264d9cd9c7/S4+Customisation.png?content-type=image%2Fpng",
    },
    {
      num: "05",
      title: "Download API Code",
      desc: "Embed a customised calculator to your website and start generating leads for your sales team.",
      image:"https://www.calconic.com/user/themes/calconic/images/step-1.webp"
        // "https://images.squarespace-cdn.com/content/65bccc6ee546664e7822619e/79b94d1c-9cdd-4b2a-99cc-84264d9cd9c7/S4+Customisation.png?content-type=image%2Fpng",
    },
  ];    
       
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    centerPadding: "40px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600, // Below 600
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",

        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ backgroundColor: "#0e3242" }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slide">
            <div className="img">
              <img
                src={item.image}
                alt={item.title}
                className="carousel-image"
              />
            </div>
            <div className="text-block">
              <span className="how">{item.title}</span>
              <span className="step">{item.num}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Widget;