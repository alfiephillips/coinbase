import type { NextPage } from "next";
import styled from "styled-components";

import { useWeb3 } from "@3rdweb/hooks";

const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper>
      {address ? (
        <Dashboard />
      ) : (
        <WalletConnect>
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
          <Details>
            You need Chrome to be <br />
            able to run this app.
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WalletConnect = styled.div``;

const Button = styled.button`
  background: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Details = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

export default Home;
