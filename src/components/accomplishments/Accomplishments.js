import { Section, SectionDivider, SectionTitle } from '@/styles/globalcomponents';
import { Box, BoxNum, BoxText, Boxes } from './AccomplishmentsStyles';

const data = [
  { number: '10+', text: 'Projects Completed' },
  { number: '1000+', text: 'Lines of Code' },
  { number: '5+', text: 'Happy Clients' },
  { number: 2, text: 'Awards' }
];

const Accomplishments = () => (
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

export default Accomplishments;

