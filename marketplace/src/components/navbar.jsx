import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    function updatemenu() {
        if (document.getElementById('responsive-menu').checked == true) {
            document.getElementById('menu').style.borderBottomRightRadius = '0';
            document.getElementById('menu').style.borderBottomLeftRadius = '0';
        } else {
            document.getElementById('menu').style.borderRadius = '10px';
        }
    }

    return (
        <nav id='menu'>
            <input type='checkbox' id='responsive-menu' onClick={updatemenu} /><label></label>
            <ul>
                <Link className="navItem" to={'/'}>
                    <li><a>Home</a></li>
                </Link>
                <Link className="navItem" to={'feed'}>
                    <li><a className='dropdown-arrow'>Products</a>
                        <ul className='sub-menus'>
                            <Link className="navItem">
                                <li><a href='http://'>Products 1</a></li>
                            </Link>
                            <Link className="navItem">
                                <li><a href='http://'>Products 2</a></li>
                            </Link>
                            <Link className="navItem">
                                <li><a href='http://'>Products 3</a></li>
                            </Link>
                        </ul>
                    </li>
                </Link>
                <Link className="navItem" to={'/inserir-novo-produto'}>
                    <li><a>Cadastrar Produto</a></li>
                </Link>
                <Link className="navItem" to={'/my-products'}>
                    <li><a>Meus Produtos</a></li>
                </Link>
                {false &&<li><a href='http://'>About</a></li>}
                {false&&<li><a className='dropdown-arrow' href='http://'>Services</a>
                    <ul className='sub-menus'>
                        <li><a href='http://'>Services 1</a></li>
                        <li><a href='http://'>Services 2</a></li>
                        <li><a href='http://'>Services 3</a></li>
                    </ul>
                </li>}
                {false&&<li><a href='http://'>Contact Us</a></li>}
            </ul>
        </nav>
    )
}

export default Navbar;