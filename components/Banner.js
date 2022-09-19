import React from 'react'
import styles from '../styles/Banner.module.css'
import { GoChevronRight } from "react-icons/go";
import Products from '../components/Products'




const Banner = ({ title }) => {
    return (
        <div>
            <section className={styles.heading}>
                <h3>{title}</h3>
                <p>see all <GoChevronRight size={13} /></p>
            </section>
            <section className={styles.data_products}>
                <Products />
            </section>
            <section className={styles.data_round}>

            </section>
        </div>
    )
}

export default Banner