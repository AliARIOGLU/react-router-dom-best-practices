import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p style={{ marginBottom: "20px" }}>
        Some error occured! if you want to go home push to button
      </p>
      <Link to="/" className="homebtn">
        Go Home
      </Link>
    </>
  );
};

export default NotFound;
