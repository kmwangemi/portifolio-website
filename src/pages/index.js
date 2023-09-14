import Accomplishments from '@/components/accomplishments/Accomplishments';
import BackgroundAnimation from '@/components/backgroundanimation';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Projects';
import Technologies from '@/components/technologies/Technologies';
import Timeline from '@/components/timeline/TimeLine';
import { Layout } from '@/layout/Layout';
import { Section } from '@/styles/globalcomponents';
import Head from 'next/head'


export default function Home() {
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
        <Section grid>
          <Hero />
          <BackgroundAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Accomplishments />
      </Layout>
    </>
  );
}
