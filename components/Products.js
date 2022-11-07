import React from 'react'
import Image from 'next/image';
import style from '../styles/Product(s).module.css'
import { products } from '../utils/MockProductsNcategories';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SeeMore from './SeeMore';
import { HiOutlineHeart } from "react-icons/hi";
// to be added when product added to wishlist
import { HiHeart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";


// AiFillStar
// AiOutlineStar


// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 6
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 6
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 2
//     }
// };
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
function loopReviews(reviewNum) {
    for (let i = 0; i <= reviewNum; i++) {
        if (reviewNum === 0) {
            return <span></span>
        }
        if (reviewNum === 1) {
            return <span className='yellow_review'><AiFillStar /></span>
        }
        if (reviewNum === 2) {
            return <span className='yellow_review'><AiFillStar /><AiFillStar /></span>
        }
        if (reviewNum === 3) {
            return <span className='yellow_review'><AiFillStar /><AiFillStar /><AiFillStar /></span>
        }
        if (reviewNum === 4) {
            return <span className='yellow_review'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
        }
        if (reviewNum === 5) {
            return <span className='yellow_review' ><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
        }
        return <span></span>

    }
}

const TopDeals = () => {
    return (
        <div>
            <Carousel className={style.carousel} responsive={responsive} slidesToSlide={2}>
                {products.map((product) => {
                    return (
                        <div key={product.id} className={style.individualProduct}>
                            <Image src={product.image} alt='' height={150} width={150} />
                            <p className='link'>{product.text.length >= 25 ? product.text.slice(0, 25) + '...' : product.text}</p>
                            <div>
                                {/*Step 1: display number stars while mapping through from api*/}
                                {/* <span>{product.reviewStars}</span> */}
                                {/*Step 2: display the actual stars while mapping from api */}
                                {<section >{loopReviews(product.reviewStars)}</section>}
                                {/*Step 2: when reciving product reviews from api map through
                                 the number of reviews given and display the stars with no outline 
                                 and if they have not reached 5 display the rest with an outline*/}

                                {/*Step 3: <section className={style.stars}>{product.reviewStars ? loopObjecs(product.reviewStars) : "nont yet"}</section> */}
                            </div>
                            <p className='priceStrikeThrough'>Ksh {product.priceFrom}</p>
                            <section className={style.flexOnProduct}>
                                <p className='price'>Ksh {product.actualPrice}</p>
                                <HiOutlineHeart className='wishlike' size={22} />
                            </section>
                        </div>
                    )
                })}
            </Carousel>
            <SeeMore />
        </div>

    )
}

export default TopDeals