import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export default function AppHeader({ ...props }) {
  const history = useHistory();
  return (
    <header className="app-header">
      <i className="fas fa-home" onClick={() => history.push("/")}></i>
      <img src={logo} alt="logo" />
      ADCAT Frontend ReactJs BoilerPlate (REDUX)
    </header>
  );
}
