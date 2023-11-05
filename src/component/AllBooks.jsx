import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";

const AllBooks = () => {
    const books = useLoaderData(); 


    return (
        <div>
            all books here
            {
                books.map(book=> <BooksCard key={book._id} books={books}></BooksCard>)
            }
        </div>
    );
};

export default AllBooks;