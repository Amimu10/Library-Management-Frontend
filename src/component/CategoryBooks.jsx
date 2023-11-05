// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const CategoryBooks = () => {
//   const [category, setCategory] = useState([]);


//   useEffect(() => {
//     fetch("http://localhost:5000/books", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const uniqueCategories = data.filter(item => item.category === category);
//        setCategory(uniqueCategories);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [category]);



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
//         {uniqueCategories.map((item) => (
//           <div key={item._id}>
//             <Link to={`/showCategory/${item.category}`}>
//               <div className="card mx-auto shadow-md border cursor-pointer">
//                 <figure className="overflow-hidden">
//                   <img
//                     className="h-[325px] object-cover w-full"
//                     src={item.image}
//                     alt=""
//                   />
//                 </figure>
//                 <div className="p-2">
//                   <h3 className="text-xl font-medium font-young text-center">
//                     {item.category}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryBooks;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [displayedCategories, setDisplayedCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const uniqueCategories = [...new Set(allBooks.map((item) => item.category))];
    setDisplayedCategories(uniqueCategories);
  }, [allBooks]);

  return (
    <div className="mx-auto max-w-[1200px] lg:px-5 px-4">
      <div className="text-center font-inter mt-12 mb-8">
        <h2 className="text-3xl font-semibold">Our Latest Category</h2>
        <p className="text-base font-inter mt-3">
          Explore our newest collection of books, carefully curated to captivate
          your imagination and provide an enriching reading experience. From
          thrilling novels to insightful histories, we have something for every
          book enthusiast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {displayedCategories.map((category) => (
          <div key={category}>
            <Link to={`/showCategory/${category}`}>
              <div className="card mx-auto shadow-md border cursor-pointer">
                <figure className="overflow-hidden">
                  <img
                    className="h-[325px] object-cover w-full"
                    src={allBooks.find((item) => item.category === category)?.image}
                    alt=""
                  />
                </figure>
                <div className="p-2">
                  <h3 className="text-xl font-medium font-young text-center">
                    {category}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
