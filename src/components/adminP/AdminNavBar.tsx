import BungalowIcon from "@mui/icons-material/Bungalow";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
//
function AdminNavBar() {
  const { currentUser, logOut }: any = useAuth();
  return (
    <div className="adminNavBar">
      <div>
        <Link to="/">
          {/* <IconButton> */}
          <BungalowIcon fontSize="large" style={{ color: "white" }} />
          {/* </IconButton> */}
        </Link>
      </div>
      <div>
        <h6 className="text-white m-0 text-center">{currentUser.email}</h6>
      </div>
      <Button variant="outline-danger" size="sm" onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
}

export default AdminNavBar;
