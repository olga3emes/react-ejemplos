import PropTypes from "react";
const Camper = (props) => <p>{props.name}</p>;
Camper.defaultProps = {
    name: "CamperBot "
};
Camper.propTypes = {
    name: PropTypes.string
}
export default Camper;