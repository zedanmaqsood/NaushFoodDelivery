import React from "react";
import LottieView from "lottie-react-native";

import {
  AccountFilter,
  ImageContainer,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageContainer>
      <AccountFilter />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
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
          Create Account
        </AuthButton>
      </AccountContainer>
    </ImageContainer>
  );
};
