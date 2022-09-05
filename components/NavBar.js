import styles from '../styles/NavBar.module.css'
// import FormRow from './FormRow';
import Image from 'next/image'
import logo from '../public/Logo(1).svg'
import Link from 'next/link';
// import { IoMdSearch } from "react-icons/io";
import { VscTriangleDown } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsCart } from "react-icons/bs";


const NavBar = () => {
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
                <p className='paragraph'>
                    Accounts <VscTriangleDown size={12} /></p>
                <div className='paragraph dispFlex_aside'>
                    <div className={styles.svgDiv} > <IoIosHelpCircleOutline size={28} /></div>
                    <div>
                        Help
                        <VscTriangleDown size={12} />
                    </div>
                </div>
                <section className='dispFlex'>
                    <div className={styles.cart_icon}><BsCart size={25} /> Cart</div>
                </section>

            </div>
        </header>
    )
}

export default NavBar