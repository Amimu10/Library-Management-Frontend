import { Link } from "react-router-dom";

const CategoryDataCard = ({data}) => {

    const {_id, image, name, author, category, rating} = data;   
    return (
        <div className="card card-compact font-inter shadow-xl">
        <figure>
          <img className="h-[240px] w-full" src={image} alt="Book Cover" /> 
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-inter">Category: {category}</p>
          <p className="font-inter">Author: {author}</p> 
          <p className="font-inter">Rating: {rating}</p> 
          <div className="card-actions justify-end">   
            <Link  to={`/bookDetails/${_id}`} className="bg-[#f33f3f] font-inter font-semibold px-3 py-2 text-white rounded-md">View Details</Link> 
          </div> 
        </div>
      </div>
    );
};

export default CategoryDataCard;
