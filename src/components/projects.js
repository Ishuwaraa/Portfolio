import styled from "styled-components";
import ProjectCard from "./projectCard";
import { projects } from "../data/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between  ;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};

    @media (max-width: 760px){
        margin-top: 12px;
        font-size: 32px;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const Projects = () => {
    return ( 
        <Container id='projects'>
            <Wrapper>
                <Title>Projects</Title>
                {/* <Description>Projects i've created so far</Description> */}
                <CardContainer>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}                    
                </CardContainer>
            </Wrapper>
        </Container>
     );
}
 
export default Projects;