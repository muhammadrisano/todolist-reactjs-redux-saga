import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = props => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="" class="navbar-brand">TodoLis</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="" class="nav-link">Link</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="" class="dropdown-item">Action</Link>
                                <Link to="" class="dropdown-item">Another action</Link>
                                <div class="dropdown-divider"></div>
                                <Link to="" class="dropdown-item">Something else here</Link>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;