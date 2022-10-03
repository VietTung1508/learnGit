import './Navbar.module.css'
import {Link, Routes , Route} from 'react-router-dom'
import {useState} from 'react';

function Navbar(){
    const [click,setClick] = useState(false)

    const closeMobileMenu = () => setClick(false)

    return <><nav className = "navBar">
        <div className='navBar-container'>
        <Link to = "/" className = "navBar-logo">
            Peace <i class="fa-solid fa-hands-bound"/>
        </Link>
        <div className='menu-icon'>
            <i onClick={() => setClick(!click)} className = {click ? "fas fa-times" : "fas fa-bars"}/>
        </div>
       
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><Link to = "/" className='nav-links' onclick = {closeMobileMenu}>Home</Link></li>
                <li className='nav-item'><Link to = "/Services" className='nav-links' onclick = {closeMobileMenu}>Services</Link></li>
                <li className='nav-item'><Link to = "/AnoutUs" className='nav-links' onclick = {closeMobileMenu}>Anout Us</Link></li>
                <li className='nav-item'><Link to = "/sign-up" className='nav-links' onclick = {closeMobileMenu}>Sign Up</Link></li>
                
            </ul>
        
        <button className = "navbar-Button">Sign Up</button>
        </div>
    </nav>
    </>
} 

export default Navbar