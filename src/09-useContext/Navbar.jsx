import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark rounded-3" data-bs-theme="dark">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">useContext</Link>
        
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className={ ( { isActive } ) => `nav-link ${ isActive ? 'active': null }` }
                                     to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={ ( { isActive } ) => `nav-link ${ isActive ? 'active': null }` }
                                     to="/about">
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                             <NavLink className={ ( { isActive } ) => `nav-link ${ isActive ? 'active': null }` }
                                     to="/login">
                                Login
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}
