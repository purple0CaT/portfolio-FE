import { Drawer, NoSsr } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminASide from "./AdminASide";
import AdminNavBar from "./AdminNavBar";
import MenuIcon from "@mui/icons-material/Menu";
//
function AdminPanel() {
  const mediaQ = useMediaQuery("(min-width:600px)", { noSsr: true });
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  //
  const toggleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };
  //
  const closeDrawer = () => {
    setVisibleDrawer(false);
  };
  return (
    <>
      <AdminNavBar />
      {mediaQ ? (
        <AdminASide />
      ) : (
        <>
          <Drawer anchor={"left"} open={visibleDrawer} onClose={toggleDrawer}>
            <AdminASide closeDrawer={closeDrawer} />
          </Drawer>
          <div className="adminMenuButton" onClick={toggleDrawer}>
            <MenuIcon />
          </div>
        </>
      )}
      <Outlet />
    </>
  );
}

export default AdminPanel;
