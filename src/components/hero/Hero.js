/* eslint-disable react/no-unescaped-entities */
import { Section, SectionText, SectionTitle } from '@/styles/globalcomponents';
import { LeftSection } from './HeroStyles';
import Button from '@/styles/globalcomponents/Button';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Full Stack <br /> Web Developer
      </SectionTitle>
      <SectionText>
        I'm Kelvin Mwangemi, a versatile professional with a background in the Software Development industry. I thrive as a team player and possess strong qualities in adaptability and precision.
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;