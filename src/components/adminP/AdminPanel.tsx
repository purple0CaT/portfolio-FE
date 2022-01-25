import { Outlet } from "react-router-dom";
import AdminASide from "./AdminASide";
import AdminNavBar from "./AdminNavBar";

function AdminPanel({ childrens }: any) {
  return (
    <>
      <AdminNavBar />
      <AdminASide />
      <Outlet />
    </>
  );
}

export default AdminPanel;
