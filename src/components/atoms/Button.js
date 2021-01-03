import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.leading};
  color: ${({ theme }) => theme.color.light};
`;

export default Button;
