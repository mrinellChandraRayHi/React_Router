import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    const {name}=user;
    return (
        <div className="text-center font-bold text-5xl py-5">
            <h1>UserDetails: {name}</h1>
        </div>
    );
};

export default UserDetails;