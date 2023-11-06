import { Link, useLoaderData } from "react-router-dom";

const ReadBooks = () => {
    const readBook = useLoaderData(); 
    // console.log(readBook); 
    const {read, name, category} = readBook;
    return (
        <div className=" max-w-[1200px] mx-auto lg:px-5 px-4 my-12">
            <p>You can read some text from the famous {category} book <span className="text-pink-500 font-inter text-base font-semibold">{name}</span></p>
            <p>{read}</p>
        <Link to="/">
         <button className="font-inter my-4 text-base text-pink-700 hover:text-pink-900 rounded-md">Go Back home</button>
        </Link>
        </div>
    );
};

export default ReadBooks;