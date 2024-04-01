import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  const Data2 = [
    "Abuse",
    "Anxiety",
    "Anger Management",
    "Burn Out",
    "ADHD",
    "Bipolar Disorder"
  ];
  const Data = [
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description: "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description: "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'

    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'

    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
  ];

// Custom arrow components
const NextArrow = ({ onClick }) => (
<div className="nextArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-right"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </div>
);

const PrevArrow = ({ onClick }) => (
<div className="prevArrow " onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-left"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </div>
);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1400,
    autoplaySpeed: 1400,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "60px",
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    swipe: false,
    pauseOnHover: false,
  };

  return (
    <div className="bg-skin px-28 py-10">
      <p className="text-4xl font-medium my-4">
        Upcoming Groups
      </p>
      <div className="relative">
      <div className="absolute w-[20%] h-[485px] top-3 right-0  bg-gradient-to-l from-[#5e5e5e]"></div>
        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg">
                <div className="relative">
                  <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
                    <p>Starts: {item.startsFrom}</p>
                  </div>
                  <img src={require(`${item.imageFile}`)} alt="" className="w-full" />
                </div>
                <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2">
                  {item.heading}
                </p>
                <p className="leading-[20px] text-[#272529]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="py-10">
        <p className="text-4xl font-medium mb-4">Reach Out To Us For</p>
        <div className="slider-container pt-16 text-3xl font-medium text-center gap-4">
          <Slider {...settings2}>
            {Data2.map((item, index) => (
              <div
                key={index}
                className={`slide flex justify-center items-center ${index === currentSlide ? "active" : ""}`}
              >
                <h3
                  className={`${index === currentSlide ? "slickCurrent text-4xl transform scale-110 transition-all duration-1000 ease-in-out" : "text-3xl"} `}
                >
                  {item}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Card
