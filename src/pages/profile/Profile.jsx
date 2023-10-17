import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <div>
      {user && (
        <div>
          <h2>Username: {user.username}</h2>
          <div className="user-info">{user.id}</div>
        </div>
      )}
      <button style={{ marginTop: "20px" }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
