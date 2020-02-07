import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// import { Card } from "./Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CrewCard = styled.div`
  height: 96px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  display: flex;
`;

const CrewImageCard = styled.div`
  width: 108px;
  height: 81px;
  border-radius: 15px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: flex-end;
`;

const CrewImage = styled.img`
  width: 108px;
  height: 77.5px;
`;

const LabelWrapper = styled.div`
  margin-left: 20px;
  margin-top: 17.5px;
  display: flex;
  flex-direction: column;
`;

const MainLabel = styled.div`
  font-size: 15px;
`;

const DescriptionLabel = styled.div`
  margin-top: 5px;
  font-size: 15px;
  color: #828f9f;
`;

const CrewList = () => {
  const today = useSelector(state => state.today, []);
  const renderCrewList = crews => {
    return crews.map(crew => (
      <CrewCard key={crew._id}>
        <CrewImageCard bgColor={crew.bgColor} width>
          <CrewImage src={crew.coverImage}></CrewImage>
        </CrewImageCard>
        <LabelWrapper>
          <MainLabel>{crew.name}</MainLabel>
          <DescriptionLabel>{crew.description}</DescriptionLabel>
        </LabelWrapper>
      </CrewCard>
    ));
  };
  if (today && today.crews)
    return <Wrapper>{renderCrewList(today.crews)}</Wrapper>;
  else return <Wrapper>Loading</Wrapper>;
};

export default CrewList;
