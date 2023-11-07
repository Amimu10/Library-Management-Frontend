import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedBooks = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    // Assuming you have a JSON file with featured books data
    fetch("/books.json")
      .then(res => res.json())
      .then(data => {
        setFeaturedBooks(data); 
        console.log(data);
      })
       // Adjust the number as needed
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center  pb-4">
        Featured Books
      </h2>
      <div className="mx-auto max-w-screen-lg">
        <Slider className="mx-auto" {...settings}>
          {featuredBooks.map((book) => (
            <div key={book.id} className="p-4">
              <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-[300px]">
                  <img 
                    className="w-full h-full object-cover"
                    src={book.image}
                    alt={book.name}
                  />
                  <div className="absolute top-0 right-0 bg-red-500 text-white p-2 font-semibold rounded-tr-lg rounded-bl-lg">
                    $ {book.price}
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-md text-center font-semibold mb-2"> 
                    {book.name}   
                  </h3>
                  <p className="text-md  text-pink-500 font-inter">{book.author}</p>  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedBooks;
