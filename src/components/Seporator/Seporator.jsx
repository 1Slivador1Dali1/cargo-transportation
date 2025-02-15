import PropTypes from "prop-types";

Seporator.propTypes = {
  id: PropTypes.string,
  height: PropTypes.number,
};

export default function Seporator({ id, height }) {
  return <div style={{ height: height + "px" }} id={id}></div>;
}
