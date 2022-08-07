import React from "react";
import styled from "styled-components";

import { AccountFilter, ImageContainer } from "../components/account.styles";

const Text = styled.Text`
  color: white;
  font-size: 42px;
  line-height: 84px;
  font-weight: bold;
  text-align: center;
  background-color: #000000c0;
`;

export const AccountScreen = () => {
  return (
    <ImageContainer>
      <AccountFilter />
      <Text>Suiii</Text>
    </ImageContainer>
  );
};
