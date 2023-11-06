
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const CategoryBooks = () => {
//   const [allBooks, setAllBooks] = useState([]);
//   const [displayedCategories, setDisplayedCategories] = useState();


//   useEffect(() => {
//     axios.get(`http://localhost:5000/books?`)      
//       .then((response) => {
//         setAllBooks(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error); 
//       }); 
//   }, []);

//   useEffect(() => {
//     const uniqueCategories = [...new Set(allBooks.map((item) => item.category))];
//     setDisplayedCategories(uniqueCategories); 
//   }, [allBooks]);

//   return (
//     <div className="mx-auto max-w-[1200px] lg:px-5 px-4">
//       <div className="text-center font-inter mt-12 mb-8">
//         <h2 className="text-3xl font-semibold">Our Latest Category</h2>
//         <p className="text-base font-inter mt-3">
//           Explore our newest collection of books, carefully curated to captivate
//           your imagination and provide an enriching reading experience. From
//           thrilling novels to insightful histories, we have something for every
//           book enthusiast.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
//         {displayedCategories.map((category) => (
//           <div key={category}>
//               <div className="card mx-auto shadow-md border cursor-pointer pb-2">
//                 <figure className="overflow-hidden">
//                   <img
//                     className="h-[325px] object-cover w-full"
//                     src={allBooks.find((item) => item.category === category)?.image}
//                     alt="" 
//                   />
//                 </figure>
//                 <div className="p-2">
//                   <h3 className="text-xl font-young text-center font-semibold text-[#14594E] font-inter ">
//                     {category} 
//                   </h3>
//                 </div>
//                 <Link to={`/showCategory/${category}`} className="text-center">
//                     <button className="bg-[#14594E] text-white p-2 rounded mt-2">
//                      View Books
//                     </button>
//                 </Link>
//               </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryBooks;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// const CategoryBooks = () => {
//     const [categories, setCategories] = useState([]); 

//     useEffect(() => {
//        fetch("http://localhost:5000/books", {
//          method: "GET",
//          headers: {
//            "content-type": "application/json"
//          },
//          body: JSON.stringify(categories)
//        })
//        .then(res => res.json())
//        .then(data => {
//         setCategories(data);
//        })
//     })
//   return (
//     <div>
//          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {categories.map((category) => (
//           <Link key={category.id} to={`/showBrand/${category.category}`}> 
//             <div className="card mx-auto shadow-md border cursor-pointer">
//               <figure className="overflow-hidden">
//                 <img className="h-[200px] object-cover w-full" src={category.image} alt="" />
//               </figure>
//               <div className="p-2">
//                 <h3 className="text-xl font-medium font-young text-center">{category.name}</h3>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryBooks;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryBooks = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
   fetch("/category.json")
   .then(res => res.json())
   .then(data => {
    setCategories(data) 
    console.log(data);
   })
  
  }, []); 

  if (!Array.isArray(categories)) {
    console.error("Data is not in the expected format:", categories);
    return null;    
  }
  return ( 
    <div className="max-w-[1200px] mx-auto lg:px-5 px-4">
        <div className="text-center font-inter mt-12 mb-8">
         <h2 className="text-3xl font-semibold">Our Latest Category</h2>
        <p className="text-base font-inter mt-3">
           Explore our newest collection of books, carefully curated to captivate
          your imagination and provide an enriching reading experience. From
          thrilling novels to insightful histories, we have something for every
          book enthusiast. 
         </p>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {categories.map((category) => (
        <div key={category.id}>  
          <div className="card mx-auto shadow-md border cursor-pointer">
            <figure className="overflow-hidden">
              <img className="h-[300px] object-cover w-full" src={category.image} alt="" />     
            </figure> 
            <div className="p-2">
              <h3 className="text-xl font-medium font-young text-center">{category.category}</h3>
            </div>
            <Link to={`/showCategory/${category.category}`}>
            <button className=" bg-neutral-600 p-2 rounded-md text-white"> See Books</button></Link>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default CategoryBooks;
