const UserCard = ({ name, role }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Role: {role}</h3>
    </div>
  );
};

export default UserCard;