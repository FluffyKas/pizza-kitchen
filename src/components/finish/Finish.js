import { Link } from "react-router-dom";

const Finish = () => {
  return (
    <div>
      <h1>Your order:</h1>
      <p>Your order is on the way!</p>
      <p>If you got a minute, tell us <Link to="/rating">how we did!</Link></p>
    </div>
  );
}

export default Finish;