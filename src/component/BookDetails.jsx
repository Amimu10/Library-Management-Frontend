// import { useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";

// const BookDetails = () => {
//   const bookDetails = useLoaderData();
//   const [modal, setmodal] = useState(false);

//   console.log(bookDetails);
//   const { _id, description, image, name } = bookDetails;

//   const handleModal = () => {
//     <div>
//       <label htmlFor="my_modal_6" className="btn">
//         open modal
//       </label>

//       <input type="checkbox" id="my_modal_6" className="modal-toggle" />
//       <div className="modal">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Hello!</h3>
//           <p className="py-4">This modal works with a hidden checkbox!</p>
//           <div className="modal-action">
//             <label htmlFor="my_modal_6" className="btn">
//               Close!
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>;
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto lg:px-5 px-4">
//       <div className="card md:card-side bg-base-500 shadow-xl border p-4">
//         <figure>
//           <img className="h-[250px]" src={image} alt="Album" />
//         </figure>
//         <div className="card-body md:w-3/4">
//           <h2 className="card-title">{name}</h2>
//           <p className="text-pink-500 font-inter font-semibold">Book Review</p>
//           <p className="text-justify">{description}</p>
//           <div className="card-actions justify-end">
//             <Link to={`/borrowBook/${_id}`}>
//               <button  className="btn btn-primary">Borrow</button>
//             </Link>
//             <Link to={`/readBook/${_id}`}>
//               <button className="btn btn-primary">Read</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt=""/>
//     <div className="flex justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//     </div>
// </div> */}
//     </div>
//   );
// };

// export default BookDetails;

import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const bookDetails = useLoaderData();
  const [modal, setModal] = useState(false);

  console.log(bookDetails);
  const { _id, description, image, name, category } = bookDetails;

  const handleModal = () => {
    setModal(!modal);
  };

  const handleBorrow = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const borrow = {
      customerName: name,
      email,
      date,
      name,
      category,
    };

    console.log(borrow);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrow),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "borrow book successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto lg:px-5 px-4">
      <div className="card md:card-side bg-base-500 shadow-xl border p-4">
        <figure>
          <img className="h-[250px]" src={image} alt="Album" />
        </figure>
        <div className="card-body md:w-3/4">
          <h2 className="card-title">{name}</h2>
          <p className="text-pink-500 font-inter font-semibold">Book Review</p>
          <p className="text-justify">{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleModal} className="btn btn-primary">
              Borrow
            </button>
            <Link to={`/readBook/${_id}`}>
              <button className="btn btn-primary">Read</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={modal}
        onChange={handleModal}
      />
      <div className={`modal ${modal ? "open" : ""}`}>
        <div className="modal-box">
          <form onSubmit={handleBorrow} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered focus-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Return Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  defaultValue={user?.email}
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleModal}
                className="bg-[#FF3811] rounded-md p-2 text-white text-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <button type="button" onClick={handleModal} className="btn">
          Cancel Borrow
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
