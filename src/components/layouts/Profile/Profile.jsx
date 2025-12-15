import DefaultLayouts from "../../ui/Layouts/DefaultLayouts";

const Profile = ({ isAuthticated }) => {
  return (
    <DefaultLayouts isAuthticated={isAuthticated}>
      <div>
        <h1>Profile</h1>
      </div>
    </DefaultLayouts>
  );
};

export default Profile;