import React from 'react'
import Image from 'next/image';
import style from '../styles/Product(s).module.css'
import { products } from '../utils/MockProductsNcategories';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const TopDeals = () => {
    return (
        <div>
            <Carousel className={style.carousel} responsive={responsive} slidesToSlide={2}>
                {products.map((product) => {
                    return (
                        <div key={product.id} className={style.individualProduct}>
                            <Image src={product.image} alt='' height={150} width={150} />
                            <p>{product.text.length >= 25 ? product.text.slice(0, 25) + '...' : product.text}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default TopDeals