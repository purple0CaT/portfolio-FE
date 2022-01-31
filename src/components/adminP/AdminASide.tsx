import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkIcon from "@mui/icons-material/Work";
import { NavLink } from "react-router-dom";
//
interface ASideImport {
  closeDrawer?: () => void;
}
//
function AdminASide({ closeDrawer }: ASideImport) {
  return (
    <section className="adminASide">
      <div className="adminASideHeader"></div>
      <NavLink
        to="/admins/activity"
        className={({ isActive }) => {
          return `${isActive && "activeASideButton"} ASideButton`;
        }}
        end
        onClick={closeDrawer}
      >
        <LineWeightIcon />
        <span className="font-weight-bold">Activity</span>
      </NavLink>
      <NavLink
        to="/admins/about"
        className={({ isActive }) => {
          return `${isActive && "activeASideButton"} ASideButton`;
        }}
        end
        onClick={closeDrawer}
      >
        <PersonOutlineIcon />
        <span className="font-weight-bold">About</span>
      </NavLink>
      <NavLink
        to="/admins/portfolio"
        className={({ isActive }) => {
          return `${isActive && "activeASideButton"} ASideButton`;
        }}
        end
        onClick={closeDrawer}
      >
        <WorkIcon />
        <span className="font-weight-bold">Portfolio</span>
      </NavLink>
      <NavLink
        to="/admins/contact"
        className={({ isActive }) => {
          return `${isActive && "activeASideButton"} ASideButton`;
        }}
        end
        onClick={closeDrawer}
      >
        <ConnectWithoutContactIcon />
        <span className="font-weight-bold">Contact</span>
      </NavLink>
    </section>
  );
}

export default AdminASide;
