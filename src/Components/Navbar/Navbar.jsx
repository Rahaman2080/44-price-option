import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/*', name: 'Not found' }
    ];


    return (
        <nav className="bg-green-400 p-6">
            <div className="md:hidden text-2xl"  onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> : 
                    <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            <ul className={`mt-3 md:mt-0 md:flex duration-700 absolute md:static
            ${open ? 'top-20': '-top-60'}
             bg-slate-500 md:bg-green-400 font-bold text-white p-4 rounded-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;