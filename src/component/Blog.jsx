import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blog.json");
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up-left" className="py-5 mb-16 max-w-[1200px] mx-auto font-inter">
        <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-semibold font-inter">Our Latest blog Post</h2>
            <p className="text-lg font-inter mt-3">Explore our latest blog posts to stay informed and entertained. From book reviews to literary insights, our blog covers a variety of topics for every avid reader. Join us on a journey through the world of literature and discover new perspectives on your favorite books.</p>

        </div>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover object-center"
                src={post.image}
                alt={`Post ${post.id}`}
              />
              <div className="p-6">
                <h2 className="text-base font-medium text-gray-900 mb-3 font-young">
                  {post.title}
                </h2>
                <p className=" text-sm text-gray-500 mb-2 ">
                  {post.author} | {post.date}
                </p>
                <p className="leading-relaxed mb-3 font-young text-gray-500">{post.description}</p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-${i < post.stars ? "yellow" : "gray"}-500`}
                    />
                  ))}
                  {post.stars % 1 !== 0 && (
                    <FaStarHalfAlt className="text-yellow-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
