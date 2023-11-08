

const BorrowBookRow = ({ item, handleDelete}) => {

  const { _id, CustomerName, Bookname, borrowed_date, email, category, image, return_date } = item;
  // console.log(item);
  return (
    <tbody>
      <tr>
        <td>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img
                src={image}
                className="h-[150px] w-[450px]  rounded-md"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold"></div>
          </div>
        </td>
        <td>
          {category}
          <br />
          <span className="badge badge-ghost badge-sm">{Bookname}</span>
        </td>
        <td>{CustomerName}</td>
        <td>{email}</td>
        <td>{return_date}</td>
        <th>
          <button onClick={() =>handleDelete(_id)} className=" bg-pink-500 p-2 rounded-md">Return</button>
        </th>
        <th>
           {borrowed_date}
       
        </th>
      </tr>
    </tbody>
  );
};

export default BorrowBookRow;