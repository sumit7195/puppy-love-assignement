import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import  "../styles/style.css"



function Navbar() {
  return (
      <div className='border link d-flex justify-content-between py-3 px-3' style={{backgroundColor:"teal"}}>

        <Link to="/" className='link'>Home</Link>
        <Link to="/search" className='link'>Search</Link>
        <Link to="/puppy" className='link'>Puppy</Link>



      </div>
  );
}

export default Navbar;