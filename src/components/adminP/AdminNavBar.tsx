import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
//
function AdminNavBar() {
  const { currentUser, logOut }: any = useAuth();
  return (
    <div className="adminNavBar">
      <div>
        <Link to="/">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>{" "}
        </Link>
      </div>
      <div>
        {" "}
        <h4 className="text-white m-0 text-center">
          Hello, {currentUser.email}
        </h4>
      </div>
      <Button variant="outline-danger" size="sm" onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
}

export default AdminNavBar;
