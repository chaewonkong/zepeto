import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 185px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
`;

const EmojiWrapper = styled.div`
  height: 37px;
  width: 106px;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 105px;
  height: 128px;
`;

const EmojiCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.div`
  width: 15px;
  height: 15px;
  font-size: 15px;
`;

const CardWrapper = styled.div`
  height: 188.5px;
  width: 106px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5px;
`;

const NameLabel = styled.div`
  margin-top: 10px;
  font-size: 11px;
  display: flex;
  justify-content: center;
`;

const LatestList = () => {
  const today = useSelector(state => state.today, []);

  const renderCards = latest => {
    return latest.map(carditem => {
      console.log(carditem.coverImage);
      return (
        <Link
          key={carditem._id}
          to="user_detail"
          style={{ textDecoration: "none" }}
        >
          <CardWrapper>
            <Card bgColor={carditem.bgColor}>
              <EmojiWrapper>
                <EmojiCircle>
                  <Emoji>😨</Emoji>
                </EmojiCircle>
              </EmojiWrapper>
              <Avatar src={carditem.coverImage}></Avatar>
            </Card>
            <NameLabel>{carditem.name}</NameLabel>
          </CardWrapper>
        </Link>
      );
    });
  };

  if (today.latest) return <Wrapper>{renderCards(today.latest)}</Wrapper>;
  else return <div>Loading</div>;
};

export default LatestList;
