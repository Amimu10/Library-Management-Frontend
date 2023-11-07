import BannerSlider from "./BannerSlider";
import Blog from "./Blog";
import CategoryBooks from "./CategoryBooks";
import FeaturedBooks from "./FeaturedBooks";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <CategoryBooks></CategoryBooks> 
            <Blog></Blog>
            <FeaturedBooks></FeaturedBooks>
            <Footer></Footer>
        </div>
    );
};

export default Home;