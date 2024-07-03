import React, { useContext, useState } from 'react'
import logo from '../Components/Assets/logo.png'
import cart_icon from '../Components/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from './Context/ShopContext'

const Navbar = () => {
    const [menu, setmenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" onClick={() => { setmenu("shop") }}> <Link style={{
                            textDecoration: 'none', color: 'black'
                        }} to='/'>Shop</Link>  </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => { setmenu("Men") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/Men'>Men</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => { setmenu("Women") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/Women'>Women</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => { setmenu("Kids") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/Kids'>Kids</Link></a>
                    </li>
                </ul>
                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-count">{getTotalCartItems()}</div>

            </div>
        </nav>
    )
}

export default Navbar
