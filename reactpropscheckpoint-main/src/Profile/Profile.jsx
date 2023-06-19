import PropTypes from "prop-types";

const Profile = ({fullName, bio, profession, children}) => {

  const handleName = () => alert(`Hello ${fullName}`)

  return(
    <div>
      {children}
      <h3> Full Name: </h3>
      <p> {fullName}  </p>
      <h3> Bio: </h3>
      <p> {bio} </p>
      <h3> Profession: </h3>
      <p> {profession} </p>
      {handleName()}
    </div>
  )
};

Profile.defaultProps = {
  fullName: "Please Enter your name",
  bio: "Please fill in your bio",
  profession: "Please input your profession"
}

Profile.propTypes={
  fullName: PropTypes.string.isRequired,
  // bio : PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  bio : PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
}

export default Profile;


