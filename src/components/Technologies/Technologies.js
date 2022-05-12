import React from 'react';
// import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import { FaEthereum, FaFigma, FaReact, FaDatabase, FaMobile, FaBitcoin } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the software world. From Back-end To Design</SectionText>
    <List>
    <ListItem>
        <FaBitcoin size="3rem"/>
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>Experience with blockchain development, smart contracts, digital tokens, web 3.0 and wallet integration</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDatabase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with Java, Node, Next.js, Databases such as SQL Server, MySQL Workbench, and PostgreSQL, MariaDB </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaFigma size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with tools like Figma and AdobeXD for prototyping screens used in the software development</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with React.js, Styled Components, CSS, SCSS, AntDesign, Bootstrap, JQuery, Lottie library and HTML5</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaMobile size="3rem"/>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>Experience developing apps with Ionic and ReactNative</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
