import React from 'react'
import style from '../styles/Product(s).module.css'
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { popularCategories } from '../utils/MockProductsNcategories';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};


const PopularCategories = () => {
    return (
        <div>
            <Carousel className={style.carousel} responsive={responsive} slidesToSlide={2}>
                {popularCategories.map((category) => {
                    return (
                        <section key={category.id} className={style.individualProduct2}>
                            {/* <Image src={category.image} alt='' height={150} width={150} /> */}
                            <div className={style.ppbrands_categories}></div>
                            <p className={style.center_text}>{category.text.length > 25 ? category.text.slice(0, 25) + '...' : category.text}</p>
                        </section>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default PopularCategories