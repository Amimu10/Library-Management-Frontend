// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider";

const BorrowBookRow = ({ item, handleDelete}) => {
  // const {user} = useContext(AuthContext);

  const { _id, customerName, Bookname, borrowed_date, email, category, image, Retuen_Date } = item;


  console.log(item);
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
        <td>{customerName}</td>
        <td>{email}</td>
        <td>{Retuen_Date}</td>
        <th>
          <button onClick={() =>handleDelete(_id)} className="btn btn-ghost text-normal btn-xs">Return</button>
        </th>
        <th>
           {borrowed_date}
       
        </th>
      </tr>
    </tbody>
  );
};

export default BorrowBookRow;
