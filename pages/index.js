import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head'

import Layout from '../src/components/Layout';
import Section from '../src/components/Section';
import Container from '../src/components/Container';
import Button from '../src/components/Button';

import styles from '../src/styles/Home.module.scss'

export default function Home() {

 
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
  
  return (
    <Layout>
      <Head>
        <title>Space Jelly</title>
        <meta name="description" content="Cosmic web dev tutorials that will shock you with joy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
            Space Jelly
          </h1>

          <p className={styles.subtitle}>
            Cosmic web dev tutorials that will shock you with joy!
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Latest Posts
          </h2>

          <ul className={styles.posts}>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-automatically-tag-categorize-images-using-ai-with-google-vision-cloudinary/">
                How to Automatically Tag & Categorize Images Using AI with Google Vision & Cloudinary
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-authenticate-spotify-web-api-requests-in-next-js-with-netlify-api-auth/">
                How to Authenticate Spotify Web API Requests in Next.js with Netlify API Auth
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-generate-personalized-social-media-cards-for-landing-pages-with-next-js-cloudinary/">
                How to Generate Personalized Social Media Cards for Landing Pages with Next.js & Cloudinary
              </a>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor="secondary">
        <Container>
          <h2 className={styles.heading}>
            Filler content
          </h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Filler content
          </h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section backgroundColor="primary">
        <Container>
          <h2 ref={magicSectionRef} className={styles.heading}>
            Magic ????
          </h2>

          <p>
            <span className={`${styles.rocket} ${magicSectionIsVisible ? styles.animateRocket : ''}`}>
              ????
            </span>
          </p>
        </Container>
      </Section>

      <Section backgroundColor="secondary">
        <Container>
          <h2 ref={myRef} className={styles.heading}>
            Have you scrolled down here yet? ????
          </h2>

          <p>{ myElementIsVisible ? 'Yes! ????' : 'No ????' }</p>
        </Container>
      </Section>

    </Layout>
  )
}