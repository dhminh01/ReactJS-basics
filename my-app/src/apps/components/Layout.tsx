import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigates = useNavigate();
  const navigatePage = (path: string) => {
    navigates(path);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div style={{ padding: "20px" }}>Header</div>
        <div>
          <button onClick={() => navigatePage("/")}>Home</button>
          <button onClick={() => navigatePage("/post")}>Post</button>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>

      <div style={{ padding: "20px" }}>Footer</div>
    </div>
  );
};

export default Layout;
