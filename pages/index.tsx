import type { NextPage } from "next";

import styled from "styled-components";
import Dashboard from "./dashboard";

import { useWeb3 } from "@3rdweb/hooks";

const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} />
      ) : (
        <WalletConnect>
          <Title>Coinbase</Title>
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
        </WalletConnect>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: whitesmoke;
  color: black;
  display: grid;
  place-items: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #0052ff;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: #0052ff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: whitesmoke;
  font-size: 16px;
  font-weight: 600;
  padding: 24px;
  margin-top: 20px;
  cursor: pointer;
`;

export default Home;
