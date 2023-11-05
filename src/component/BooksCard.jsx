const BooksCard = ({ book }) => {
    const { image, name, category, author, rating } = book;
  
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
            <button className="bg-[#2B3441] px-3 py-2 text-white rounded-md">Update</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BooksCard;
  