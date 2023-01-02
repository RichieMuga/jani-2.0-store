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
import { useDispatch, useSelector } from 'react-redux';
import { toggleAccount, toggleHelp } from '../store/helpNaccountModal';
// import { changeHelpNAccountModal } from '../store/helpNaccountModal'
// import { useState } from 'react';
import { BiHelpCircle } from "react-icons/bs";



const NavBar = () => {
    // get modal state from global store
    const { isHelpDropdownOpen, isAccountDropdownOpen } = useSelector((store) => store.modal)

    const dispatch = useDispatch()
    const handleAccounts = (e) => {
        e.preventDefault()
        dispatch(toggleAccount())

    }
    const handleHelp = (e) => {
        e.preventDefault()
        dispatch(toggleHelp())
    }
    return (
        <header className={styles.navBar}>
            <div className={styles.navBarDiv}></div>
            <div className={styles.navBarContent}>
                <div className={styles.logo}><Link href={'/'}><Image src={logo} alt='Home' /></Link></div>
                <section className={`dispFlex ${styles.search_ting}`}>
                    <button type="submit" className={styles.filter_btn}>All <VscTriangleDown size={12} /></button>
                    <input
                        type='text'
                        className={styles.search_bar}
                        placeholder='Search for products...'
                    />


                    {/* // type={type}
                    // value={value}
                    // name={name}
                    // onChange={handleChange}
                    // className={form_input}
                    // placeholder={placeholder} */}

                    <button type="submit" className={styles.search_btn}>Search</button>
                </section>
                {/* account btn */}
                <section className={styles.dropdown}>
                    <div className={styles.navBtn}>
                        <button className={`accountNhelp dispFlex_aside ${styles.dropbtn}`}>
                            <AiOutlineUser size={28} />
                            <span>Accounts</span>
                            <VscTriangleDown className={styles.dropDown} size={12} />
                        </button>
                    </div>
                    <div className={styles.dropdown_content}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </section>

                {/* help btn */}
                <section className={styles.dropdown}>
                    <div className={styles.navBtn}>
                        <button className={`accountNhelp dispFlex_aside ${styles.dropbtn}`}>
                            <IoIosHelpCircleOutline size={28} />
                            <span>Help</span>
                            <VscTriangleDown className={styles.dropDown} size={12} />
                        </button>
                    </div>
                    <div className={styles.dropdown_content}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
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