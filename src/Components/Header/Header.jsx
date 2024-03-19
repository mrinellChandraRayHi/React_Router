import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex items-center list-none gap-4 bg-red-600 py-3 text-white font-bold">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Header;