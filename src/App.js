import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme } from './utils/themes';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import Skills from './components/skills';
import Projects from './components/projects';
import {BrowserRouter,Routes,Route, useNavigate, Navigate } from 'react-router-dom'
import Footer from './components/footer';

const Body = styled.div`
    background-color: ${({theme}) => theme.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden:
`;

const Wrapper = styled.div`
    background: linear-gradient(
        38.73deg, 
        rgba(204, 0, 187, 0.15) 0%, 
        rgba(201, 32, 184, 0) 50%
        ), 
        linear-gradient(
        141.27deg, 
        rgba(0, 70, 209, 0) 50%, 
        rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
            <Navbar />
            <Body>
            <HeroSection />
            <Wrapper>
                <Skills />
            </Wrapper>
            <Projects />
            <Footer />
            </Body>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
