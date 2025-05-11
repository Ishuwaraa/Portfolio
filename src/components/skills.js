import styled from "styled-components";
import { skills } from "../data/constants";

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
    margin-top: 50px;
    margin-bottom: 100px;
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

const Description = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 30px;
    justify-content: center;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    max-width: 500px;
    background: ${({ theme }) => theme.card};
    border: 0.1px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;
    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }
    @media (max-width: 500px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`;

const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

const Skills = () => {
    return ( 
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Description>
                    Some of the skills i've learned so far...
                </Description>
                <SkillsContainer>
                    {skills.map((item, index) => (
                        <Skill key={index}>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {item.skills.map((skill, skillIndex) => (
                                    <SkillItem key={`${index}-${skillIndex}`}>
                                        <SkillImage src={skill.image} />
                                        {skill.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
     );
}
 
export default Skills;