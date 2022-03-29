import { Link } from "react-router-dom";
import './OrangeButton.scss';

const OrangeButton = ({ nextPage, text }) => {
  return (
    <Link to={nextPage} className="orange-button">{text}</Link>
  );
}

export default OrangeButton;