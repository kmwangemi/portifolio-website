import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
   <Section row nopadding>
      <LeftSection>
         <SectionTitle main center>
            Front End <br /> Web Developer
         </SectionTitle>
         <SectionText>
            I am Kelvin Mwangemi. Multiskilled personnel with experience in the 
            Software Development industry. Team player with strengths in 
            adaptability and accuracy.
         </SectionText>
         <Button onClick={() => window.location = '#projects'}>
            Learn More
         </Button>
      </LeftSection>
   </Section>
);

export default Hero;