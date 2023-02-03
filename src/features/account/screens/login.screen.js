import React, { useContext, useState } from "react";

import {
  AccountFilter,
  ImageContainer,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
  AuthLoading,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, setError, isLoading } = useContext(AuthContext);

  const onBack = () => {
    setError(null);
    navigation.navigate("Main");
  };

  return (
    <ImageContainer>
      <AccountFilter />
      <Title>Naush</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer position="top" size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <Spacer size="large" position="top">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer position="top" size="large" />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <AuthLoading />
        )}
      </AccountContainer>
      <Spacer position="top" size="large" />
      <AuthButton icon="arrow-left" mode="contained" onPress={onBack}>
        Back
      </AuthButton>
    </ImageContainer>
  );
};
