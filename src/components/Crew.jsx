import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CrewList from "./CrewList";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Header = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
`;

const HeaderMainLabel = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const HeaderSubLabel = styled.div`
  font-size: 19px;
  color: #764eff;
`;

const Crew = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderMainLabel>주목받는 크루</HeaderMainLabel>
        <HeaderSubLabel>더보기</HeaderSubLabel>
      </Header>

      <CrewList></CrewList>
    </Wrapper>
  );
};

export default Crew;
