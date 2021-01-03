import styled from "styled-components";

const Icon = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;
export default Icon;
