

const BooksCard = ({books}) => {
    const { image,  
        name, 
        quantity, 
        category,  
        author, 
        rating,
        description} = books; 
    
    return (
        <div>
            {
                books.length 
            }
        </div>
    );
};

export default BooksCard;