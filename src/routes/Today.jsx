import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import LatestList from "../components/LatestList";

const TodayLabel = styled.div`
  font-size: 28px;
  font-family: GilroyBold;
`;

const TodayHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const IconWrapper = styled.div`
  background: ${props => props.background};
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
`;

const Today = () => {
  return (
    <div>
      <Header>
        <TodayLabel>Today</TodayLabel>
        <TodayHeaderRight>
          <Icon src="assets/refresh.png"></Icon>
          <IconWrapper background="#f1f3f8">
            <Icon src="assets/menu.png"></Icon>
          </IconWrapper>
        </TodayHeaderRight>
      </Header>
      <LatestList></LatestList>
    </div>
  );
};

export default Today;
