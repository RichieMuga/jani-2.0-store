import styles from '../styles/NavBar.module.css'
// import FormRow from './FormRow';
import Image from 'next/image'
import logo from '../public/Logo(1).svg'
import Link from 'next/link';
// import { IoMdSearch } from "react-icons/io";
import { VscTriangleDown } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { VscPackage } from "react-icons/vsc";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import SideBar from './SideBar';
import SearchBar from './SearchBar';





// import { useDispatch, useSelector } from 'react-redux';
// import { toggleAccount, toggleHelp } from '../store/helpNaccountModal';
// import { changeHelpNAccountModal } from '../store/helpNaccountModal'
// import { useState } from 'react';



const NavBar = () => {
    // get modal state from global store
    // const { isHelpDropdownOpen, isAccountDropdownOpen } = useSelector((store) => store.modal)

    // const dispatch = useDispatch()
    // const handleAccounts = (e) => {
    //     e.preventDefault()
    //     dispatch(toggleAccount())

    // }
    // const handleHelp = (e) => {
    //     e.preventDefault()
    //     dispatch(toggleHelp())
    // }
    return (
        <header className={styles.navBar}>
            <div className={styles.navBarDiv}></div>
            <div className={styles.navBarContent}>
                <div className={styles.sideBar}><SideBar /></div>
                <div className={styles.logo}><Link href={'/'}><Image src={logo} alt='Home' /></Link></div>
                <span className={styles.search_ting_bar}><SearchBar /></span>
                {/* account btn */}
                <section className={`${styles.dropdown} ${styles.accountBtn}`}>
                    <div className={styles.navBtn}>
                        <button className={`accountNhelp dispFlex_aside ${styles.dropbtn}`}>
                            <AiOutlineUser size={28} />
                            <span className={styles.iconText}>Accounts</span>
                            <VscTriangleDown className={styles.dropDown} size={12} />
                        </button>
                    </div>
                    <div className={styles.dropdown_content}>
                        <div className='btn-signIn-small'><button className={styles.button_31}>Sign In</button></div>
                        <div className='small-underline'></div>
                        <a href="#"><AiOutlineUser size={25} />Account</a>
                        <a href="#"><VscPackage size={25} />Orders</a>
                    </div>
                </section>

                {/* help btn */}
                <section className={`${styles.dropdown} ${styles.helpBtn}`}>
                    <div className={styles.navBtn}>
                        <button className={`accountNhelp dispFlex_aside ${styles.dropbtn}`}>
                            <IoIosHelpCircleOutline size={28} />
                            <span className={styles.iconText}>Help</span>
                            <VscTriangleDown className={styles.dropDown} size={12} />
                        </button>
                    </div>
                    <div className={styles.dropdown_content}>
                        <a href="#"> <BiPhone size={25} /> Contact Us</a>
                        <a href="#"><AiOutlineMenuUnfold />Help Menu</a>
                    </div>
                </section>
                {/* cart btn */}
                <section className='cart dispFlex'>
                    <div className={styles.cart_icon}><BsCart size={25} />
                        <p>Cart</p>
                    </div>
                </section>

            </div>
        </header>
    )
}

export default NavBar