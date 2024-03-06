import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assets/Layer 14.png";
import image2 from "../assets/Layer 15.png";
import image3 from "../assets/Layer 16.png";
import image4 from "../assets/Layer 17.png";
import image5 from "../assets/Layer 18.png";
import image6 from "../assets/Layer 19.png";
import image7 from "../assets/Layer 20.png";
import image8 from "../assets/Layer 21.png";
import image9 from "../assets/Layer 22 copy.png";
import image10 from "../assets/Layer 23.png";
import image11 from "../assets/Layer 24.png";

const Clients = () => {
    const images = [image1,image1, image2, image3,image3, image4, image5,image5, image6, image7,image7, image8, image9,image9, image10, image11];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    const Tabsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    return (
        <>
      <div className="bg-[#f6f7fc] px-7 py-12">
        <h1 className='text-[#bd72d3] my-5 md:text-3xl md:ml-14 md:my-7 lg:text-5xl font-bold lg:ml-28 lg:my-10'>Clients we work with</h1>
        <div className='block md:hidden lg:hidden'>
        <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} className="w-full" />
          </div>
        ))}
      </Slider>
        </div>

        <div className='hidden md:block lg:hidden'>
        <Slider {...Tabsettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} className="w-full px-3" />
          </div>
        ))}
      </Slider>
        </div>

        <div className='hidden lg:block'>
        <div className="flex justify-evenly">
          {images.slice(0, 8).map((image, index) => (
            <img key={index} src={image} className="w-40" />
          ))}
        </div>
        <div className="flex justify-evenly mt-10">
          {images.slice(8).map((image, index) => (
            <img key={index} src={image} className="w-40" />
          ))}
        </div>
        </div>
      </div>
      <div>
        <h1 className='text-center my-7 text-[#757575] font-bold text-xl md:text-2xl lg:text-4xl px-5'>Ready to accelerate your business? <span className='text-[#bd72d3] border-b-2'>Let's talk.</span></h1>
      </div>
      </>
  )
}

export default Clients