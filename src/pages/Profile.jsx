import { useAuth } from '../Context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {user && (
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more profile fields as needed */}
        </div>
      )}
    </div>
  );
};

export default Profile;