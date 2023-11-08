import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Typography, Button } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import 'aos/dist/aos.css'; 
// import AOS from 'aos';

// AOS.init();

const images = [
  "https://source.unsplash.com/2560x1440/?library",
  "https://source.unsplash.com/2560x1440/?books",
  "https://source.unsplash.com/2560x1440/?bookstore",
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider className="" {...settings}> 
      {images.map((imageUrl, index) => (
        <div key={index} className="relative h-screen w-full" data-aos="zoom-out-down"  >
          <img
            src={imageUrl}
            alt={`image ${index + 1}`}
            className="h-[650px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 font-inter">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="lg:mb-4 my-8 text-3xl md:text-2xl lg:text-5xl font-semibold text-white"
              >
                Explore the World of Books 
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-white"
              >
                Immerse yourself in the vast world of literature. Discover a curated collection of books spanning various genres and topics.
              </Typography>
              <div className="flex mb-14 flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
               <Link to="/allBooks">
               <Button size="lg" color="white" variant="text" className="w-full md:w-auto hover:bg-[#f33f3f] p-2 rounded-md">
                  Browse Books 
                </Button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
