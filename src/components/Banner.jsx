import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 80px;
  border-radius: 48px;
  background: #f1f3f8;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const PrimaryLabel = styled.div`
  font-size: 15px;
  margin-bottom: 3.5px;
`;

const SecondaryLabel = styled.div`
  font-size: 13px;
`;

const Banner = () => {
  return (
    <Wrapper>
      <Circle>🏠</Circle>
      <LabelWrapper>
        <PrimaryLabel>주말에 집에서 뒹굴뒹굴 하는 사람?</PrimaryLabel>
        <SecondaryLabel>소울메이트에서 만나보자😀</SecondaryLabel>
      </LabelWrapper>
    </Wrapper>
  );
};

export default Banner;
