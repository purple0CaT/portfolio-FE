import Login from "../../components/login/Login";
import { useAuth } from "../../firebase/AuthProvider";
import "./style/Admin.scss";
//
function AdminPage() {
  const { currentUser }: any = useAuth();
  return (
    <div className="adminWrapper">
      {currentUser ? (
        <div> User</div>
      ) : (
        <div className="adminWrapper__login">
          <Login />
        </div>
      )}
    </div>
  );
}

export default AdminPage;
