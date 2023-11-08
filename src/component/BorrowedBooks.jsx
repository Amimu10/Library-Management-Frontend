import { useContext, useEffect, useState } from "react";  
import axios from "axios";  
import BorrowBookRow from "./BorrowBookRow";  
import { AuthContext } from "../AuthProvider";  
import Swal from "sweetalert2"; 

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [borrow, setBorrow] = useState([]); 
console.log(borrow);

const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://readers-heaven-server.vercel.app/bookings/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "You returtn book successfully.",
              icon: "success"
            });

            const remaining = borrow.filter(data => data._id !== id)
            setBorrow(remaining);
          }
        })
        .catch(error => {
          console.error("Error deleting file:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the file.",
            icon: "error"
          });
        });
    }
  });
};

  const url = `https://readers-heaven-server.vercel.app/bookingData?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true })
      .then((response) => {
        setBorrow(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [url]);

  return (
    <div className="overflow-x-auto max-w-[1200px] mx-auto lg:px-5 px-4">
      <div className="text-center text-2xl font-semibold my-8 font-inter text-pink-600">
        <p>My Borrowed Book List</p>
      </div>
      <table className="table">
        <thead>
          <tr className="text-base font-inter font-semibold text-stone-700 ">
            <th>image</th>
            <th>category/Book</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Borrowed  Date</th>
          </tr>
        </thead>
        {
            user &&  borrow.length > 0  ? borrow.map(item => <BorrowBookRow key={item._id} item={item} handleDelete={handleDelete}></BorrowBookRow>)
            :
            "There is no data available"
        }
      
      </table>
    </div>
  );
};

export default BorrowedBooks;

// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import BorrowBookRow from "./BorrowBookRow";
// import { AuthContext } from "../AuthProvider";

// const BorrowedBooks = () => {
//   const { user } = useContext(AuthContext);
//   console.log(user);
//   const [borrow, setBorrow] = useState([]); 
//   //   console.log(borrow.image);
// console.log(borrow);
//   // const url = `http://localhost:5000/bookingData?email=${user?.email}`;
//   // useEffect(() => {
//   //   fetch(url, {
//   //     credentials: "include",
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setBorrow(data);
//   //     });
//   // }, [url]);

//   const handleDelete = (id) => {
//     const procced = confirm("Are you sure you want to delete");
//     if(procced){
//         fetch(`http://localhost:5000/bookings/${id}`, {
//           method: 'DELETE', 
//         }) 
//         .then(res => res.json()) 
//         .then(data => { 
//           console.log(data);
//           if(data.deletedCount > 0){
//              alert("Deleted") 

//              const remaining = borrow.filter(data => data._id !== id) 
//              setBorrow(remaining)
//           }
//         })
//     }
// }

//   const url = `http://localhost:5000/bookingData?email=${user?.email}`;
  
//   useEffect(() => {
//     axios.get(url, { withCredentials: true })
//       .then((response) => {
//         setBorrow(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         // Handle the error as needed, e.g., show an error message to the user
//       });
//   }, [url]);
  
//   //       const url = `/http://localhost:5000/bookingData?email=${user?.email}`;
//   //        useEffect(() => {
//   //        axios.get(url, {withCredentials: true})
//   //        .then( res => {
//   //         setBorrow(res.data);
//   //        })
//   // }, [url])

//   return (
//     <div className="overflow-x-auto max-w-[1200px] mx-auto lg:px-5 px-4">
//       <div className="text-center text-2xl font-semibold my-8 font-inter text-pink-600">
//         <p>My Borrowed Book List</p>
//       </div>
//       <table className="table">
//         {/* head */}
//         <thead>
//           <tr className="text-base font-inter font-semibold text-stone-700 ">
//             <th>image</th>
//             <th>category/Book</th>
//             <th>Customer Name</th>
//             <th>Email</th>
//             <th>Return Date</th>
//             <th>Status</th>
//             <th>Borrowed  Date</th>
//           </tr>
//         </thead>
//         {
//             user &&  borrow.length > 0  ? borrow.map(item => <BorrowBookRow key={item._id} item={item} handleDelete={handleDelete}></BorrowBookRow>)
//             :
//             "There is no data available"
//         }
      
//       </table>
//     </div>
//   );
// };

// export default BorrowedBooks;