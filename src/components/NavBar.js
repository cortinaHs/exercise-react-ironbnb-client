import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <nav className="Navbar">
            <NavLink className="Link" to="/">Home</NavLink>
            <NavLink className="Link" to="/apartments">Apartments</NavLink>
            <NavLink className="Link" to="/apartments/create">Create</NavLink>
        </nav>
    )
}