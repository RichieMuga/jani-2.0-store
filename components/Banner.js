import React from 'react'
import styles from '../styles/Banner.module.css'
import { GoChevronRight } from "react-icons/go";
import TopDeals from './Products';
import PopularCategories from './PopularCategories';
import PopularBrands from './PopularBrands';




const Banner = ({ title }) => {
    return (
        <div>
            <section className={styles.heading}>
                <h3>{title}</h3>
                <p>see all <GoChevronRight size={13} /></p>
            </section>
            <section className={styles.data_products}>
                {/* {remove NaN and add a fallback value later} */}
                {"Top deals" === title ? <TopDeals /> : ''}
            </section>
            <section className={styles.data_round}>
                {/* {remove NaN and add a fallback value later} */}
                {"Explore popular categories" === title ? <PopularCategories /> : ""}
            </section>
            <section className={styles.data_round}>
                {/* {remove NaN and add a fallback value later} */}
                {"Popular Brands" === title ? <PopularBrands /> : ""}
            </section>
        </div>
    )
}

export default Banner