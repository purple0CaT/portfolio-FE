import LineWeightIcon from "@mui/icons-material/LineWeight";
import WorkIcon from "@mui/icons-material/Work";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { NavLink } from "react-router-dom";
//
function AdminASide() {
  return (
    <section className="adminASide">
      <NavLink
        to="/admins/activity"
        className={({ isActive }) => {
          return `${isActive && "activeASideButton"} ASideButton`;
        }}
        end
      >
        <LineWeightIcon />
        <span className="font-weight-bold">Activity</span>
      </NavLink>
      <NavLink
        to="/admins/portfolio"
        className={({ isActive }) => {
          return `${isActive && "activeASideButton"} ASideButton`;
        }}
        end
      >
        <WorkIcon />
        <span className="font-weight-bold">Portfolio</span>
      </NavLink>
      <NavLink
        to="/admins/about"
        className={({ isActive }) => {
          return `${isActive && "activeASideButton"} ASideButton`;
        }}
        end
      >
        <PersonOutlineIcon />
        <span className="font-weight-bold">About</span>
      </NavLink>
    </section>
  );
}

export default AdminASide;
