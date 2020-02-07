import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 185px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Card = styled.div`
  width: 106px;
  height: 165px;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, #3383fc, #00cce5);
`;

const LatestList = () => {
  return (
    <Wrapper>
      <Card></Card>
    </Wrapper>
  );
};

export default LatestList;
