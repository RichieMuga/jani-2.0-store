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
import { changeHelpNAccountModal } from '../store/helpNaccountModal'
// import { useState } from 'react';
import AccountnHelpBtnClick from './Modal/AccountnHelpBtn';


const NavBar = () => {
    // get modal state from global store
    const { isModalOpen } = useSelector((store) => store.modal)




    const handleAccounts = (e) => {
        e.preventDefault()

    }
    const handleHelp = (e) => {
        e.preventDefault()
        return console.log("help")
    }
    return (
        <header className={styles.navBar}>
            <div className={styles.navBarDiv}></div>
            <div className={styles.navBarContent}>
                <Link href={'/'}><Image src={logo} alt='Home' /></Link>
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
                <button className={styles.navBtn} onClick={handleAccounts}>
                    <div className='paragraph dispFlex_aside'>
                        <div className={styles.svgDiv} > <AiOutlineUser size={28} /></div>
                        <div>
                            Accounts
                            <VscTriangleDown size={12} />
                        </div>
                    </div>
                </button>
                {/* <div className={styles.smallModal}>hi</div> */}

                {/* help btn */}
                <button className={styles.navBtn} onClick={handleHelp}>
                    <div className='paragraph dispFlex_aside'>
                        <div className={styles.svgDiv} > <IoIosHelpCircleOutline size={28} /></div>
                        <div>
                            Help
                            <VscTriangleDown size={12} />
                        </div>
                    </div>
                </button>
                {/* cart btn */}
                <section className='cart dispFlex'>
                    <div className={styles.cart_icon}><BsCart size={25} /> Cart</div>
                </section>

            </div>
        </header>
    )
}

export default NavBar