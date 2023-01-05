import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const SideBar = () => {
    return (
        <Menu>
            <Link className="menu-item" href="/">
                Home
            </Link>
            <Link className="menu-item" href="/salads">
                Salads
            </Link>
            <Link className="menu-item" href="/pizzas">
                Pizzas
            </Link>
            <Link className="menu-item" href="/desserts">
                Desserts
            </Link>
        </Menu>
    );
};

export default SideBar