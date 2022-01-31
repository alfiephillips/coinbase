import Header from "../components/Header";

import styled from "styled-components";
import { NextPage } from "next";

interface DashboardProps {
  address: string;
}

const Dashboard: NextPage<DashboardProps> = ({ address }) => {
  return (
    <Wrapper>
      <MainContainer>
        <Header />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: whitesmoke;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Dashboard;
