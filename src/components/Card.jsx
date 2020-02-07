import styled from "styled-components";

export const Card = styled.div`
  width: 106px;
  height: 165px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: ${props => props.bgColor};
`;
