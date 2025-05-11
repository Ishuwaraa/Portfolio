import styled from 'styled-components';
import { Bio } from '../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

    return ( 
        <FooterContainer>
            <FooterWrapper>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.linkedin} target="display">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,300,150">
                          <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal'}}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                      </svg>
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.instagram} target="display" style={{ marginTop: '5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="24" viewBox="0,0,255.99942,255.99942">
                      <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal'}}><g transform="scale(5.33333,5.33333)"><path d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z"></path></g></g>
                    </svg>
                    </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
                    &copy; {currentYear} Ishuwara Avarjana. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
     );
}
 
export default Footer;