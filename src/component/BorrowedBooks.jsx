import { useContext, useEffect, useState } from "react";
import axios from "axios"; 
import BorrowBookRow from "./BorrowBookRow";
import { AuthContext } from "../AuthProvider";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext); 
  console.log(user); 
      const [borrow, setBorrow] = useState([]); 
    //   console.log(borrow.image); 

      // useEffect(() => {
      //   axios.get(`http://localhost:5000/bookings?email=${user?.email}`, borrow, {withCredentials: true}) 
      //   .then(res =>{ 
      //       setBorrow(res.data)
      //       console.log(res.data);   
      //   })

      // }, [])

      // useEffect(() => {
      //   axios.get(`http://localhost:5000/bookings?email=${user?.email}`, {                       
      //     withCredentials: true,          
      //   })
      //   .then(res => {
      //     setBorrow(res.data); 
      //     console.log(res.data);  
      //   })
      // }, []);

      const url = `/http://localhost:5000/bookings?email=${user?.email}`; 
      useEffect(() => { 
       fetch(url, {credentials: "include"}) 
       .then(res => res.json())
       .then( data => { 
        setBorrow(data); 
       })
}, [url])

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