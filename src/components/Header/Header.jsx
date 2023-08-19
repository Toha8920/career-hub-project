import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start font-bold text-xl">
                <Link to="/">Career Hub</Link>
            </div>
            <div className="navbar-center">
                <Link className="mr-3" to="/">Statics</Link>
                <Link className="mr-3" to="/applied">Applied Jobs</Link>
                <Link to="Blog">Blog</Link>
            </div>
            <div className="navbar-end">
                <a id="btn" className="">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;