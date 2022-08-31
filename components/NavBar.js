import styles from '../styles/NavBar.module.css'
import FormRow from './FormRow';
import Image from 'next/image'
import logo from '../public/Logo(1).svg'
import Link from 'next/link';
import { IoMdSearch } from "react-icons/io";
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

                    <input type='text' className={styles.search_bar} />
                    {/* // type={type}
                    // value={value}
                    // name={name}
                    // onChange={handleChange}
                    // className={form_input}
                    // placeholder={placeholder} */}

                    <button type="submit" className={styles.search_btn}>Search</button>
                </section>
                <p className='paragraph'>Accounts <VscTriangleDown size={12} /></p>
                <p className='paragraph'><IoIosHelpCircleOutline size={25} />Help <VscTriangleDown /></p>
                <section className='dispFlex'>
                    <p className='paragraph'><BsCart size={25} /> Cart</p>
                </section>

            </div>
        </header>
    )
}

export default NavBar