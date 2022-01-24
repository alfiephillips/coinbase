import Header from "../components/Header";

interface DashboardProps {
  address: string;
}

const Dashboard = ({ address }: DashboardProps) => {
  return <Header />;
};

export default Dashboard;
