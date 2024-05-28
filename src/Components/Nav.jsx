import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
      <img className='logoimg' src={logo} alt="" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/specials">Specials</Link>
        </li>
        <li>
          <Link to="/reserve">Reserve a table</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
