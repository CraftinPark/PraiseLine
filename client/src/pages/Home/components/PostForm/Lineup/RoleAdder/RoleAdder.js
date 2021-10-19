import "./styles.css";

const ROLES = ["Leader", "Vocal", "Acoustic Guitar", "Keyboard", "Bass", "Drummer", "Electric Guitar"];

const RoleAdder = ({ assignments, setAssignments }) => {
  const roleOptions = ROLES.map((role) => {
    return (
      <option key={role} value={role}>
        {role}
      </option>
    );
  });

  const addRoleOption = (role) => {
    let newState = [...assignments];
    let match = newState.find((assignment) => assignment.role === role);
    if (match)
      //existing property, add member selector as second
      match.members.push("");
    //new property, create property
    else newState.push({ role: role, members: [""] });
    setAssignments(newState);
  };

  return (
    <div className="new-role">
      <select className="selector" id="lineup-new-role-selector">
        <option>select a role</option>
        {roleOptions}
      </select>
      <button
        className="submit"
        onClick={() => addRoleOption(document.getElementById("lineup-new-role-selector").value)}
      >
        Add New Role
      </button>
    </div>
  );
};
export default RoleAdder;
