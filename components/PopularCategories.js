import React from 'react'
import style from '../styles/Product(s).module.css'
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { popularCategories } from '../utils/MockProductsNcategories';
import SeeMore from './SeeMore';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop4: {
        breakpoint: { max: 3000, min: 1250 },
        items: 6
    },
    deskto3: {
        breakpoint: { max: 1250, min: 1024 },
        items: 5
    },
    desktop2: {
        breakpoint: { max: 1024, min: 870 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 870, min: 620 },
        items: 3
    },
    tablet2: {
        breakpoint: { max: 620, min: 380 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 380, min: 0 },
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
                            <div className={style.ppbrands_categories + " " + category.bgColor + " " + "flex_kidogo"}>
                                {/* <Image src={category.image} alt='' height={15} width={15} /> */}
                                <Image src={category.image} alt={category.text} height={180} width={130} />
                            </div>
                            <p className={style.center_text}>{category.text.length > 25 ? category.text.slice(0, 25) + '...' : category.text}</p>
                        </section>
                    )
                })}
            </Carousel>
            <SeeMore />

        </div>
    )
}

export default PopularCategories