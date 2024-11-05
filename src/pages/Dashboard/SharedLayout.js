import { Outlet } from "react-router-dom";
import { Navbar, SmallSidebar, BigSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);

  console.log(isSidebarOpen);

  return (
    <>
      <Wrapper>
        <main className="dashboard">
       
            <>
              <SmallSidebar />
              <BigSidebar />
            </>
       

          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
