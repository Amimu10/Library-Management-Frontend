import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
    const books = useLoaderData();   
    console.log(books); 
  const {_id, image, name, quantity, category, author, rating, description, read} = books;  

    const handleUpdateBook = (e) => { 
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const author = form.author.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const read = form.read.value;
    
        const updatedBook = {     
          image, 
          name,
          quantity,
          category,
          author,
          rating,
          description, 
          read
        };
        console.log(updatedBook);   

        fetch(`https://readers-heaven-server.vercel.app/books/${_id}`, {            
            method: "PUT",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(updatedBook),   
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: true,
                  timer: 1500,
                });
              }
            });
          
    }
    return (
    <div className="text-center px-4 py-8 bg-[#232323]">
      <h3 className="font-young text-[#eee] mb-8 font-semibold lg:text-3xl text-xl">
        Update Book : {name}
      </h3>
      <form
        onSubmit={handleUpdateBook}
        className="bg-[#F4F3F0] p-4 sm:p-8 rounded shadow-lg w-full sm:max-w-md mx-auto"
      >
        <div className="mb-4"> 
          <label
            htmlFor="image"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Image 
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={image} 
            placeholder="Enter image URL"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div> 
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Book Name 
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          {" "}
          Select Quantity
        </label>
        <select
          required
          name="quantity"
          defaultValue={quantity}
          className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            defaultValue={category}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
           
          >
            <option value="">Select Category</option>
            <option defaultValue="Novel">Novel </option>
            <option defaultValue="Thriller">Thriller</option>
            <option defaultValue="History">History</option>
            <option defaultValue="Drama">Drama</option>
          </select>
        </div>
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <label
              htmlFor="author"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              defaultValue={author}
              placeholder="Enter author name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="w-full sm:w-1/2 px-2">
            <label
              htmlFor="rating"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating" 
              defaultValue={rating}
              placeholder="Enter rating"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div> 
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            placeholder="Enter description"
            className="w-full px-3 py-4 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="read"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Read Books  
          </label>
          <textarea
            id="read" 
            name="read" 
            defaultValue={read}
            placeholder="Enter description"
            className="w-full px-3 py-4 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-[#f33f3f] text-[#eee]  font-young py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline-green"
          >
            Update this Book 
          </button>
        </div>
      </form>
    </div>
    );
};

export default UpdateBook;