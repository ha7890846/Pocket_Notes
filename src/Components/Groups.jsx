/* eslint-disable react/prop-types */
const Groups = ({group = [], setActiveChat}) => {
  const data = group ? JSON.parse(group) : [];

  function getInitials(name) {
    if (!name) {
      return "";
    }
    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[1];
    const firstNameInitial = firstName ? firstName[0] : "";
    const lastNameInitial = lastName ? lastName[0] : "";
    return `${firstNameInitial}${lastNameInitial}`;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div className="grp" key={index}>
          <div
            className="user-profile-image"
            style={{ backgroundColor: item.color}}
          >
            {getInitials(item.name)}
          </div>
          <div className="grp-name" onClickCapture={()=>{setActiveChat(item)}}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};
export default Groups;
