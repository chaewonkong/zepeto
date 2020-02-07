import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 66px;
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
  align-items: center;
`;

const Header = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Header;
