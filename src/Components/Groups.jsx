/* eslint-disable react/prop-types */
const Groups = ({ group, setActiveChat }) => {
  function getInitials(name) {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts.map((part) => part[0]).join("").toUpperCase();
  }

  return (
    <div>
      {group.map((item, index) => (
        <div 
          className="grp" 
          key={index} 
          onClick={() => setActiveChat(item)} // Ensures group is selected
        >
          <div 
            className="user-profile-image" 
            style={{ backgroundColor: item.color }}
          >
            {getInitials(item.name)}
          </div>
          <div className="grp-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Groups;
