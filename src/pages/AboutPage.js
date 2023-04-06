import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero1.jpg'
import aboutImgSecond from '../assets/hero2.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title='about' />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="Nice vase" />
      <article>
        <div className="title">
          <h2>Our story</h2>
          <div className='underline'></div>
        </div>
        <p>Adora Studio began in 2010 as a passion project between a group of designers and craftsmen with a shared love for modern furniture. The team set out to create furniture that was not only beautiful but also functional and affordable. From humble beginnings, Adora Studio quickly gained popularity among design enthusiasts and homeowners looking to elevate their living spaces. Today, Adora Studio is a reputable brand with a wide range of furniture offerings and a commitment to sustainable manufacturing practices. With a focus on quality, design, and customer satisfaction, Adora Studio continues to inspire and empower customers to transform their homes with modern style and comfort.
        </p>
      </article>
      <article>
        <div className="title">
          <h2>Nowadays</h2>
          <div className='underline'></div>
        </div>
        <p>Today, the company is dedicated to providing modern furniture solutions that meet the needs of contemporary living. The brand has expanded its offerings to include a diverse range of furniture pieces, from stylish sofas to elegant dining tables and everything in between. Adora Studio remains committed to quality, design, and sustainability, using only the finest materials and eco-friendly manufacturing practices. With a growing customer base and a reputation for excellence, Adora Studio continues to be a go-to destination for those who seek exceptional modern furniture that combines style, comfort, and affordability.
        </p>
      </article>
      <img src={aboutImgSecond} alt="Nice table and chairs" />
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
