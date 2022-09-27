import React from 'react'
import style from '../styles/Product(s).module.css'
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import { popularBrands } from '../utils/MockProductsNcategories'

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
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const PopularBrands = () => {
    return (
        <div>
            <Carousel className={style.carousel} responsive={responsive} slidesToSlide={2}>
                {popularBrands.map((brand) => {
                    return (
                        <div key={brand.id} className={style.individualProduct}>
                            <div className={style.ppbrands_categories + " " + brand.bgColor + " " + "flex_kidogo"}>
                                <Image src={brand.image} alt='' height={180} width={130} />
                            </div>
                            <p className={style.center_text}>{brand.text.length >= 25 ? brand.text.slice(0, 25) + '...' : brand.text}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default PopularBrands