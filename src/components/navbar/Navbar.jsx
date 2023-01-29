import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <h2><span className='logo'>lamabooking</span></h2>
            <div className="nav-items">
                <button className="nav-btn">Register</button>
                <button className="nav-btn">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar