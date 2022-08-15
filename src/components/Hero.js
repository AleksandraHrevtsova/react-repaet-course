import styled from "styled-components";
import {Container} from './styledComponents';
import { getLocale } from "../i18n";

const SectionWrapper = styled.section`
  padding-top: 90px;
  padding-bottom: 122px;
  letter-spacing: 0.2px;
`;

const HeroTitle = styled.h1`
  font-size: 72px;
  line-height: 1.25;
  font-weight: 700;
  max-width: 935px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  margin-top: 40px;
  padding-top: 18px;
  p {
    max-width: 348px;
    font-size: 16px;
    line-height: 1.5;
  }
  p:not(:last-child){
    margin-right: 20px;
  }
  ::after{
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #C4C4C4;
    position: absolute;
    left: 0;
    top: -16px;
  }
`;

export function Hero (){
  return (
    <SectionWrapper>
      <Container>
        <HeroTitle>{getLocale('hero_title')}</HeroTitle>
        <ContentWrapper>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  )
}