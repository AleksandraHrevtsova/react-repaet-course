import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const withLeftSidebar = (Component) => {
  const WrappedComponent = () => {
    return (
      <>
        <Sidebar />
        <Header />
        <Component />
      </>
    );
  };
  return WrappedComponent;
};

export default withLeftSidebar;
