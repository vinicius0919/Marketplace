import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../context/auth'
import Navbar from '../../components/navbar';
const Template = ({ children }) => {
    const context = useContext(UserContext)
    return (
        <>
            <Navbar />
            <h1 className='tittlePage'>BEM VINDO AO MARKETPOÇO, {context.nome}</h1>
            <Outlet />
            <footer className='footerApp' >meu footer</footer>

        </>
    )
}

export default Template;