import "./styles.css";

const Member = ({member}) => {
  return (
    <div key={"list" + member._id} className="members__member">
      {member.firstName}
    </div>
  );
};
export default Member;
