import { projects } from '@/constants';
import { Section, SectionDivider, SectionTitle } from '@/styles/globalcomponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
        projects.map(({ id, image, title, description, tags, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {
                  tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))
                }
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
);

export default Projects;