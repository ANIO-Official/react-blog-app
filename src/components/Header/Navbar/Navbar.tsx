//Navbar component

import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav>
            <h1>Chat.co 🗣</h1>
            <ul className="navigation-bar">
                { /*Conditional Button: isAuthenticated -> Logout, !isAuthenticated -> Login */}
            <li>    
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active-link" : "inactive-link"
                    }
                    style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                    to="/" //link for URL
                >
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active-link" : "inactive-link"
                    }
                    style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                    to="/admin-dashboard" //link for URL
                >
                    Admin
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active-link" : "inactive-link"
                    }
                    style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                    to="blogs-index" //link for URL
                >
                    Blog Index
                </NavLink>
            </li>
            </ul>
        </nav>
    )
}