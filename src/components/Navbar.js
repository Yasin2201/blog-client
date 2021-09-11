import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>
                The Boring Blog
            </h1>
            <Link to="/">
                Home
            </Link>
        </nav>
    )
}

export default Navbar