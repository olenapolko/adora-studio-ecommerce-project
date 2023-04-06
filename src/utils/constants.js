import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our mission is to design and provide modern furniture that enhances the lives of our customers by creating functional, comfortable, and beautiful living spaces. We strive to continuously innovate and improve our products and services, while maintaining a strong focus on customer satisfaction, sustainability, and social responsibility.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our vision is to become the go-to destination for those who seek exceptional modern furniture that combines style, quality, and affordability, while fostering a sustainable approach to manufacturing. We aim to inspire and empower our customers to create personalized, stylish, and functional living spaces that reflect their unique personalities and lifestyles.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Adora Studio was founded in 2010 by a team of experienced designers and craftsmen who shared a passion for modern design and furniture. Since then, we have grown into a reputable brand that offers a wide selection of furniture and services, all while maintaining our commitment to excellence and customer satisfaction.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'
export const single_product_url = `https://course-api.com/react-store-single-product?id=`
