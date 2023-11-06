import { useEffect, useState } from "react";
import axios from "axios"; 
import BorrowBookRow from "./BorrowBookRow";

const BorrowedBooks = () => {
      const [borrow, setBorrow] = useState([]); 
    //   console.log(borrow.image); 

      useEffect(() => {
        axios.get("http://localhost:5000/bookings", borrow)
        .then(res =>{ 
            setBorrow(res.data)
            console.log(res.data);  
        })

      }, [])

    return (
        <div className="overflow-x-auto max-w-[1200px] mx-auto lg:px-5 px-4">
        <table className="table">
          {/* head */}
          <thead> 
            <tr>
              <th>image</th>  
              <th>category/Book</th>  
              <th>Customer Name</th>    
              <th>Email</th>  
              <th>Return Date</th> 
              <th>Status</th> 
              <th>Delete</th> 
            </tr>
          </thead> 
        {
            borrow.map(item => <BorrowBookRow key={item._id} item={item}></BorrowBookRow>)
        }
          
        </table>
      </div>
    );
};

export default BorrowedBooks;