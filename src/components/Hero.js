import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero1.jpg'
import heroBcg2 from '../assets/hero2.jpg'

const Hero = () => {
  return <Wrapper className='section-center'>
    <article className="content">
      <h1>
        design your <br />
        comfort zone
      </h1>
      <p>Experience the Art of Modern Living with Adora Studio: Where Comfort and Style Meet. Crafted with Quality Materials and Attention to Detail, Our Furniture Transforms Houses into Homes.</p>
      <Link to='/products' className='btn hero-btn'>Shop now</Link>
    </article>
    <article className='img-container'>
      <img src={heroBcg} alt="Nice table" className='main-img' />
      <img src={heroBcg2} alt="Person working" className='accent-img'/>
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 300px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 40%;
      height: 80%;
      background: var(--clr-primary-5);
      bottom: 0%;
      left: -20%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
