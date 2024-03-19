const User = ({user}) => {
    const {id, name, email, phone}=user
    return (
        <div className="border-2 border-black rounded-lg py-2 px-4">
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;