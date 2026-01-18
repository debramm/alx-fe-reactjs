import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link style={{ margin: '10px' }} to="/">Home</Link>
      <Link style={{ margin: '10px' }} to="/about">About</Link>
      <Link style={{ margin: '10px' }} to="/services">Services</Link>
      <Link style={{ margin: '10px' }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
