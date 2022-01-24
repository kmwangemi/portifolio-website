import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
   { number: '10+', text: 'Projects Completed' },
   { number: '1000+', text: 'Lines of Code' },
   { number: '5+', text: 'Happy Clients' },
   { number: 2, text: 'Awards' }
];

const Acomplishments = () => (
   <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
         {data.map((card, index) => (
            <Box key={index}>
               <BoxNum>{card.number}</BoxNum>
               <BoxText>{card.text}</BoxText>
            </Box>
         ))}
      </Boxes>
      <SectionDivider />
   </Section>
);

export default Acomplishments;
