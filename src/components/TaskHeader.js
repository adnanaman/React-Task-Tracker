import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const TaskHeader = ({ title, visibility, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button text={showAdd ? "Close" : "Add "} onClick={visibility}></Button>
      )}
    </header>
  );
};

TaskHeader.defaultProps = {
  title: "Task Header",
};

TaskHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskHeader;
