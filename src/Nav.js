import './App.css';
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav>
        <h3>logo</h3>
        <ul className='nav-link'>
            <Link style={{color: "white"}} to="/about">
                <li>about</li>
            </Link>

            <Link style={{color: "white"}}   to="/shop">
                <li>shop</li>
            </Link>
        </ul>

    </nav>
  );
}

export default Nav;
