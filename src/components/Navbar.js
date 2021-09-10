import { Link } from "react-router-dom";

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