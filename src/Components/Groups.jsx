/* eslint-disable react/prop-types */
const Groups = ({ group = [], setActiveChat }) => {
  const data = group ? group : [];

  function getInitials(name) {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts.map(part => part[0]).join("").toUpperCase();
  }

  return (
    <div>
      {data.map((item, index) => (
        <div className="grp" key={index} onClick={() => setActiveChat(item)}>
          <div className="user-profile-image" style={{ backgroundColor: item.color }}>
            {getInitials(item.name)}
          </div>
          <div className="grp-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Groups;
