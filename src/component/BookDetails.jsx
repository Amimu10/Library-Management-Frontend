import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => { 
    const bookDetails = useLoaderData(); 
    console.log(bookDetails); 
    const {_id, description, image, name} = bookDetails; 

    return ( 
       <div className="max-w-[1200px] mx-auto lg:px-5 px-4">
         <div className="card md:card-side bg-base-500 shadow-xl border p-4"> 
        <figure><img className="h-[250px]" src={image} alt="Album"/></figure> 
        <div className="card-body md:w-3/4"> 
          <h2 className="card-title">{name}</h2> 
          <p className="text-pink-500 font-inter font-semibold">Book Review</p>
          <p className="text-justify">{description}</p> 
          <div className="card-actions justify-end">
            <Link to={`/borrowBook/${_id}`}> 
            <button className="btn btn-primary">Borrow</button>
            </Link>
            <Link to={`/readBook/${_id}`}>
            <button className="btn btn-primary">Read</button>
            </Link>
            
          </div>
        </div>
      </div> 

{/* <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt=""/>
    <div className="flex justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
</div> */}

       </div>
    );
};

export default BookDetails;