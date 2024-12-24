import { lazy } from "react";
import { Container, H3 } from './styles';
import { UsernameProvider } from "../../UsernameContext";

const Menu = lazy(() => import("../../components/Menu"));

const Dashboard = () => {
  return (
    <UsernameProvider>
      <Menu>
      </Menu>
    </UsernameProvider>
  );
};

export default Dashboard;