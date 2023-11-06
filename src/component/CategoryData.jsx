import { useLoaderData } from "react-router-dom";
import CategoryDataCard from "./CategoryDataCard";

const CategoryData = () => {
    const categorydata = useLoaderData(); 
    // console.log(categorydata._id); 

    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-[1200px] lg:px-5 px-4 my-8">
           {
                categorydata?.map(data => <CategoryDataCard key={data._id} data={data}></CategoryDataCard>)
            }
           </div>
        </div>
    );
};

export default CategoryData; 