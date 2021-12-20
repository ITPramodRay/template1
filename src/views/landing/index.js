import { Link, useHistory } from "react-router-dom";

export default function LandingPage({ ...props }) {
  const history = useHistory();
  return (
    <div className="wrapper">
      This is the `Landing Page`.
      <p>Use this page as reference for understading inter-page navigation</p>
      <p>
        <Link to="/dashboard">GO TO DASHBOARD</Link>
      </p>
    </div>
  );
}
