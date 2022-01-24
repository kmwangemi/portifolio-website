import React from 'react';
import {
   AiFillGithub,
   AiFillLinkedin,
   AiFillTwitterCircle,
   AiFillFacebook,
   AiOutlineArrowUp
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
   CompanyContainer,
   FooterWrapper,
   LinkColumn,
   LinkItem,
   LinkList,
   LinkTitle,
   Slogan,
   SocialContainer,
   SocialIconsContainer,
   ScrollContainer,
   Button
} from './FooterStyles';

const Footer = () => {

   // const [visible, setVisible] = useState(false)

   // const toggleVisible = () => {
   //    const scrolled = document.documentElement.scrollTop;
   //    if (scrolled > 300) {
   //       setVisible(true)
   //    }
   //    else if (scrolled <= 300) {
   //       setVisible(false)
   //    }
   // };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
         /* you can also use 'auto' behaviour
            in place of 'smooth' */
      });
   };

   // window.addEventListener('scroll', toggleVisible);

   return (
      <FooterWrapper>
         <LinkList>
            <LinkColumn>
               <LinkTitle>Call</LinkTitle>
               <LinkItem href="tel:070-661-2976">070-661-2976</LinkItem>
            </LinkColumn>
            <LinkColumn>
               <LinkTitle>Email</LinkTitle>
               <LinkItem href="mailto:mwangemik@gmail.com">
                  mwangemik@gmail.com
               </LinkItem>
            </LinkColumn>
         </LinkList>
         <SocialIconsContainer>
            <CompanyContainer>
               <Slogan>"Innovating one project at a time"</Slogan>
            </CompanyContainer>
            <SocialContainer>
               <SocialIcons href='https://github.com/kmwangemi?tab=repositories' target="_blank">
                  <AiFillGithub size='3rem' />
               </SocialIcons>
               <SocialIcons href='https://www.linkedin.com/in/mwangemik/' target="_blank">
                  <AiFillLinkedin size='3rem' />
               </SocialIcons>
               <SocialIcons href='https://twitter.com/mwangemik' target="_blank">
                  <AiFillTwitterCircle size='3rem' />
               </SocialIcons>
               <SocialIcons href='https://www.facebook.com/mwangemik/' target="_blank">
                  <AiFillFacebook size='3rem' />
               </SocialIcons>
            </SocialContainer>
         </SocialIconsContainer>
         <ScrollContainer>
            <Button>
               <AiOutlineArrowUp size='3rem' onClick={scrollToTop} />
            </Button>
         </ScrollContainer>
      </FooterWrapper>
   );
};

export default Footer;
