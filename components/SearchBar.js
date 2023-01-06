import React from 'react'
import { VscTriangleDown } from "react-icons/vsc";
import styles from '../styles/NavBar.module.css'


const SearchBar = () => {
    return (
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
    )
}

export default SearchBar