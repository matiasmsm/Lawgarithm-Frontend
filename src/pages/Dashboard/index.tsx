import { lazy } from "react";
import { Container, H3 } from './styles';
import { UsernameProvider } from "../../UsernameContext";

const Menu = lazy(() => import("../../components/Menu"));
const ChatDashboard = lazy(() => import("../../components/ChatDashboard"));

const Dashboard = () => {
  return (
      <ChatDashboard />
  );
};

export default Dashboard;