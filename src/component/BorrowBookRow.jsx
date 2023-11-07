// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider";

const BorrowBookRow = ({ item }) => {
  // const {user} = useContext(AuthContext);

  const { customerName, Bookname, email, category, image, Retuen_Date } = item;
  console.log(item);
  return (
    <tbody>
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
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
          <button className="btn btn-ghost btn-xs">confirm</button>
        </th>
        <th>
          <button className="btn btn-sm btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default BorrowBookRow;
