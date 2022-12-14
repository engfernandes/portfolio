import { Box, ChakraProvider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import theme from "./theme/Theme";
import * as S from "./styles";
import Header from "./components/layout/Header/Header";
import SolidButtonUI from "./components/SolidButton/SolidButton";
import OutlinedButtonUI from "./components/OutlinedButton/OutlinedButton";
import AvatarUI from "./components/Avatar/Avatar";
import AboutCardUI from "./components/AboutCard/AboutCard";
import { BsFillPersonFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import SimpleCardUI from "./components/SimpleCard/SimpleCard";
import WebDevelopmentImage from './img/Vector-1.svg';
import WebDesign from './img/Vector.svg';
import SupercardUI from "./components/SuperCard/SuperCard";
import SkillsUI from "./components/Skills/Skills";
import FormUI from "./components/Form/Form";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <S.FlexStyled>
        <Header />
      </S.FlexStyled>
      <SimpleGrid
        minChildWidth='120px'
        spacing='20px'
        alignItems='center'
        justifyItems='center'
        marginTop='128px'
      >
      <Box>
        <Heading color="#FFFFFF">Hi, I am</Heading>
        <Heading color="#FFFFFF">Gabriel Fernandes</Heading>
        <Text color="#828282">Frontend Developer</Text>
        <SolidButtonUI text="Download CV" />
        <OutlinedButtonUI text="Learn More" />
      </Box>
      <Box>
        <AvatarUI />
      </Box>
      </SimpleGrid>
      <Box 
        alignItems='center'
        display='flex'
        flexDirection='column'
        gap='16px'
        marginTop='128px'
      >
        <Heading color='#FFFFFF'>About</Heading>
        <Text
          color='#FFFFFF'
          maxWidth='900px'
          minWidth='150px'
        >
        During my carrer, I worked mainly system management. Due to this, I creating a great experience in ERPs, CRMs, development, automations, data analysis and support for internal customers. Now studying Software Engineering at Cruzeiro do Sul and complementing my studies with courses, I'm focusing on increasing my skills in programming, devOps, business agility and management techniques. 
        I currently work with Support Analyst at the largest urban micro mobility company in Latin America.
        </Text>
      </Box>
      <Box 
        display='flex' 
        justifyContent='center'
        gap='16px'
        marginTop='128px'
      >
        <AboutCardUI icon={BsFillPersonFill} title={'Full Name'} description={'Gabriel Fernandes'} />
        <AboutCardUI icon={BsGithub} title={'GitHub'} description={'engfernandes'} />
        <AboutCardUI icon={BsLinkedin} title={'LinkedIn'} description={'engfernandes'} />
      </Box>
      <Box
        alignItems='center'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        gap='32px'
        marginTop='128px'
      >
        <Heading color='#FFFFFF'>What i do</Heading>
        <Box
          alignItems='center'
          display='flex'
          justifyContent='center'
          gap='32px'
        >
          <SimpleCardUI title={'Web Development'} image={WebDevelopmentImage} />
          <SimpleCardUI title={'Web Design'} image={WebDesign} />
        </Box>
      </Box>
      <Box
        alignItems='center'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        gap='32px'
        marginTop='128px'
      >
        <Heading color='#FFFFFF'>My Skills</Heading>
          <SupercardUI>
            <SkillsUI percent={98} skill={'HTML'} />
            <SkillsUI percent={90} skill={'CSS3'} />
            <SkillsUI percent={80} skill={'REACTJS'} />
            <SkillsUI percent={80} skill={'TYPESCRIPT'} />
            <SkillsUI percent={70} skill={'NODEJS'} />
          </SupercardUI>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        gap='32px'
        marginTop='128px'
      >
        <Heading color='#FFFFFF'>Get in touch</Heading>
        <FormUI />
      </Box>
    </ChakraProvider>
  );
}

export default App;
