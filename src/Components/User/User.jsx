import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone}=user
    return (
        <div className="border-2 border-black rounded-lg py-2 px-4 text-center">
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>Phone: {phone}</p>
            <Link className="bg-blue-600 p-1 rounded-lg text-white" to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;

