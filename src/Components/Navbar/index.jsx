import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCartContext); // Estado global para el conteo en el carrito
    const activeStyle = "underline underline-offset-4"; // Clase para línea subrayada en Tailwind CSS

    return (
        <nav className="fixed top-0 w-full z-10">


            {/* Barra de navegación */}
            <div className="flex items-center justify-between bg-blue-700 text-white shadow-lg py-4 px-8">
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-2xl">
                        <NavLink to='/'>Style360</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' onClick={() => context.setSearchByCategory()}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink>
                    </li>
                    <li>
                        <NavLink to='/clothes' onClick={() => context.setSearchByCategory('clothes')}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>Clothes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink to='/furnitures' onClick={() => context.setSearchByCategory('furnitures')}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>Furnitures</NavLink>
                    </li>
                    <li>
                        <NavLink to='/toys' onClick={() => context.setSearchByCategory('toys')}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>Toys</NavLink>
                    </li>
                    <li>
                        <NavLink to='/others' onClick={() => context.setSearchByCategory('others')}
                            className={({ isActive }) => isActive ? activeStyle : undefined}>Others</NavLink>
                    </li>
                </ul>

                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-white">
                        bussinesglobales@gmail.com
                    </li>
                    <li>
                        <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>Sign In</NavLink>
                    </li>
                    <li className="flex items-center font-semibold">
                        <ShoppingCartIcon className="h-6 w-6 text-black" />
                        <div>{context.cartProducts.length} Carrito</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
