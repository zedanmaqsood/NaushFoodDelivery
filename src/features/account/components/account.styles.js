import styled from "styled-components";
import { Button, TextInput, ActivityIndicator } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const ImageContainer = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountFilter = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({
  mode: "outlined",
  activeOutlineColor: colors.brand.primary,
})`
  width: 250px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  width: 250px;
  align-self: center;
  margin-vertical: ${(props) => props.theme.space[2]};
`;

export const AuthLoading = styled(ActivityIndicator).attrs({
  animating: true,
  color: colors.brand.primary,
})``;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
