import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list  from "../../public/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.category === "latest");
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return ( <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
   <div>
   <h1 className="font-semibold text-2xl pb-2">
        New Release {" "} 
         <span className="font-semibold text-pink-500">This week</span>
      </h1>
      <p>
        Its time to update your reading list with some of the latest and greates releases in the literary world. From heart-pumping 
        thrillers  to captivating memories this week's new releases offer something for everyone. 
      </p>
   </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
  </>
  )
}

export default Freebook;
