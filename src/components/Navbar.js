import { NavLink } from 'react-router-dom';
import Logo from './logo';
import Form from './Form';
const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <NavLink to='/'>{Logo}</NavLink>
       
        <div className='nav-links'>
        <NavLink className='nav-item' to='/login1'>
            Signup/Login
          </NavLink>
          <NavLink className='nav-item' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-item' to='/about'>
            About
          </NavLink>
          <NavLink className='nav-item' to='/plants'>
            Plants
          </NavLink>
          <NavLink className='nav-item' to='/logout'>
            Logout
          </NavLink>

        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
