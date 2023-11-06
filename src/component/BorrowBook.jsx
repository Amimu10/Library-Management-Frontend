import { useLoaderData } from "react-router-dom";

const BorrowBook = () => {
  const borrowBook = useLoaderData(); 
  console.log(borrowBook); 
    return (
        <div>
            
        </div>
    );
};

export default BorrowBook; 