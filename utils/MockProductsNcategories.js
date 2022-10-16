import image from '../public/sminnof.jpg'
// brands pictures
import nike from '../public/logo/nike-removebg-preview.png'
import garnier from '../public/logo/Garnier-removebg-preview.png'
import nivea from '../public/logo/Nivea_logo-removebg-preview.png'
import tagwood from '../public/logo/tagwood-removebg-preview.png'
import eastwestFashion from '../public/logo/eastwestFashion-removebg-preview.png'
import huawei from '../public/logo/Huawei-Logo.png'

// product category pictures
import accessories from '../public/products/accessories-removebg-preview.png'
import sports from '../public/products/dumbells2-removebg-preview.png'
import shoes from '../public/products/shoes-removebg-preview.png'
import smartphones from '../public/products/smartphone-removebg-preview.png'
import fashion from '../public/products/biegeDress-removebg-preview.png'
import electronics from '../public/products/electronics-removebg-preview.png'



export const products = [
    { id: 1, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 4 },
    { id: 2, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 2 },
    { id: 3, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 3 },
    { id: 4, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 1 },
    { id: 5, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 3 },
    { id: 6, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 4 },
    { id: 7, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: "none" },
    { id: 8, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 3 },
    { id: 9, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 3 },
    { id: 10, image, text: "Smirnoff Smirnoff Ice Black Can - 330ml - Pack Of 6", price: 160, reviewStars: 1 },




]

export const popularCategories = [
    { id: 1, text: 'Shoes', path: '/api/v1/shoes', bgColor: "green", image: shoes },
    { id: 2, text: 'Sports', path: '/api/v1/sports', bgColor: "red", image: sports },
    { id: 3, text: 'SmartPhones', path: '/api/v1/smartPhones', bgColor: "blue", image: smartphones },
    { id: 4, text: 'Fashion', path: '/api/v1/fashion', bgColor: "pink", image: fashion },
    { id: 5, text: 'Accessories', path: '/api/v1/Accessories', bgColor: "yellow", image: accessories },
    { id: 6, text: 'Electronics', path: '/api/v1/Electronics', bgColor: "blue", image: electronics }
]

export const popularBrands = [
    { id: 1, text: 'eastwest fashion', bgColor: "white", image: eastwestFashion },
    { id: 2, text: 'Nivea', bgColor: "blue", image: nivea },
    { id: 3, text: 'Nike', bgColor: "white", image: nike },
    { id: 4, text: 'Garnier', bgColor: "green", image: garnier },
    { id: 5, text: 'Huawei', bgColor: "white", image: huawei },
    { id: 6, text: 'TagWood', bgColor: "white", image: tagwood }
]


// { id: 1, },
// { id: 2, },
// { id: 3, },
// { id: 4, },
// { id: 5, },
// { id: 6, }