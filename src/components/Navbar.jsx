import React from "react";
import {Link, useLocation} from "react-router-dom";
import {IconLogout} from "../assets/icons/IconLogout";

export const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="navbar flex items-center gap-2">
            <Link to='/' className={`nav ${path === '/' && 'active'}`}>Dashboard</Link>
            <Link to='/' className={`nav ${path === '/api' && 'active'}`}>API</Link>
            <Link to='/' className={`nav ${path === '/support' && 'active'}`}>Support</Link>
            <Link to='/' className={`nav ${path === '/statistics' && 'active'}`}>Statistic</Link>
            <Link to='/software' className={`nav ${path === '/software' && 'active'}`}>Software</Link>
            <Link to='/' className={`nav ${path === '/blog' && 'active'}`}>Blog</Link>

            <form className="w-[140px] mx-2">
                <select className="bg-transparent border border-[#5B6A7D] text-white text-sm rounded-lg h-[36px] block w-full px-2 outline-none">
                    <option value="customers" selected>Customers</option>
                    <option value="orders">Orders</option>
                </select>
            </form>
            <button className="flex items-center gap-2 cursor-pointer">
                <IconLogout />
                <span className="text-[#CBE417] text-base font-normal">Sign out</span>
            </button>
        </div>
    )
};