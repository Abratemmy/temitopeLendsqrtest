import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserAction.scss";
import type { User } from "../../types/User";

interface Props {
  user: User;
}

const UserActions = ({ user }: Props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
    navigate(`/users/${user.id}`);
  };

  const handleBlacklist = () => {
    alert(`${user.username} blacklisted`);
    setOpen(false);
  };

  const handleActivate = () => {
    alert(`${user.username} activated`);
    setOpen(false);
  };

  return (
    <div className="user-actions">
      <button
        className="user-actions__trigger"
        onClick={() => setOpen(!open)}
      >
        ⋮
      </button>

      {open && (
        <div className="user-actions__menu">
          <button onClick={handleViewDetails}>View Details</button>
          <button onClick={handleBlacklist}>Blacklist User</button>
          <button onClick={handleActivate}>Activate User</button>
        </div>
      )}
    </div>
  );
};

export default UserActions;
