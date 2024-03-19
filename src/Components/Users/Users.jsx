import { useLoaderData } from "react-router-dom"
import User from "../User/User";

export default function Users() {
    const users=useLoaderData();
    return (
        <div>
            <h1>Our Users : {users.length}</h1>
            <h1>This is Users....</h1>
            <div className="grid grid-cols-3 gap-5">
                {users.map((user, idx)=><User key={idx} user={user}/>)}
            </div>
        </div>
    )
}
