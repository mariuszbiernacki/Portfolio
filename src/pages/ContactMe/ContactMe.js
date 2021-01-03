import React from "react";
import Heading from "../../components/atoms/Heading";
import Icon from "../../components/atoms/Icon";
import Paragraph from "../../components/atoms/Paragraph";
import emailIcon2 from "../../assets/icons/envelope-2.svg";
import styled from "styled-components";
import linkedinIcon from "../../assets/icons/linkedin-brands.svg";
import githubIcon from "../../assets/icons/github-brands.svg";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  padding: 100px 0;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 500px;
`;

const WrapperLinks = styled.div`
  padding-left: 15px;
`;

const WrapperLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.leading};
  :hover {
    color: ${({ theme }) => theme.color.dark};
    text-decoration: none;
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 20px;
`;

const ContactMe = () => {
  return (
    <StyledContainer>
      <Wrapper>
        <Heading>Kontakt ze mną</Heading>

        <WrapperLinks>
          <WrapperLink href="mailto: mariusz.biernacki88@gmail.com">
            <StyledIcon size={30} src={emailIcon2} />
            <span>mariusz.biernacki88@gmail.com</span>
          </WrapperLink>
          <WrapperLink
            href="https://www.linkedin.com/in/mariusz-biernacki-5a6809146/"
            target="_blank"
          >
            <StyledIcon size={30} src={linkedinIcon} />
            <span>linkedin</span>
          </WrapperLink>
          <WrapperLink
            href="https://github.com/mariuszbiernacki"
            target="_blank"
          >
            <StyledIcon size={30} src={githubIcon} />
            <span>github</span>
          </WrapperLink>
        </WrapperLinks>
      </Wrapper>
    </StyledContainer>
  );
};

export default ContactMe;
