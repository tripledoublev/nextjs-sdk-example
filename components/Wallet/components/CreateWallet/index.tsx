import {
  Button,
  Header,
  InputsBox,
  Powered,
  Title,
  Wrapper,
} from "@/public/style";
import Logo from "@/public/tweed-logo";
import { Widget } from "@paytweed/frontend-sdk-react";
import { useCallback, useRef, useState } from "react";

const CreateWallet = () => {
  const [showSetPin, setShowPin] = useState(false);
  const emailRef = useRef("");
  const onUserChange = async () => {
    const body = JSON.stringify({ email: emailRef.current });
    await fetch("http://localhost:3010/user", {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
    });
    setShowPin(true);
  };

  const onWalletCreated = useCallback(() => {
    window.location.href = "/";
  }, []);

  return (
    <>
      {showSetPin ? (
        <Widget.Wallet.Create onSuccess={onWalletCreated} />
      ) : (
        <Wrapper>
          <Header>
            <Logo />
          </Header>

          <Title>Welcome to Tweed Example 🎉</Title>

          <InputsBox>
            <Button onClick={onUserChange}>Create a new wallet</Button>
          </InputsBox>
          <Powered>Powered by Tweed</Powered>
        </Wrapper>
      )}
    </>
  );
};

export default CreateWallet;
