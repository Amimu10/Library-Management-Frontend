import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";

const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div>  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-[1200px] my-12">
          {
                books.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
            }
          </div>
        </div>
    );
};

export default AllBooks;