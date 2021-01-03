import React from "react";
import githubIcon from "../../assets/icons/github-brands-light.svg";
import linkedinIcon from "../../assets/icons/linkedin-brands-light.svg";
import styled from "styled-components";
import LinkIcon from "../atoms/LinkIcon";

const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.color.light};
  background-color: ${({ theme }) => theme.color.leading};
  padding: 20px 0;
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;

const FooterParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  opacity: 0.8;
  margin: 0;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterParagraph>Mariusz Biernacki</FooterParagraph>
        <IconWrapper>
          <LinkIcon
            size={20}
            src={githubIcon}
            className="mr-3"
            href="https://github.com/mariuszbiernacki"
            title="github"
            target="_blank"
          />
          <LinkIcon
            size={20}
            src={linkedinIcon}
            title="linkedin"
            href="https://www.linkedin.com/in/mariusz-biernacki-5a6809146/"
            target="_blank"
          />
        </IconWrapper>
        <FooterParagraph>
          © 2020 Mariusz Biernacki. Wszystkie prawa zastrzeżone
        </FooterParagraph>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
