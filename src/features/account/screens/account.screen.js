import React from "react";

import {
  AccountFilter,
  ImageContainer,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageContainer>
      <AccountFilter />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large" />
        <AuthButton
          icon="account-plus-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </ImageContainer>
  );
};
