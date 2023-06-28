import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="texl=6xl">
      <h1>This is the Homepage</h1>
      <Link to="/about" className="text-blue-500">
        AboutPage
      </Link>
    </div>
  );
};
export default HomePage;
