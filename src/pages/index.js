import { useEffect } from 'react';
import Head from 'next/head';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <>
         <Head>
            <title>Kelvin - Portfolio</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
         </Head>
         <Layout>
            <Section grid >
               <Hero />
               <BgAnimation />
            </Section>
            <Projects />
            <Technologies />
            <Timeline />
            <Acomplishments />
         </Layout>
      </>
   );
};

export default Home;
