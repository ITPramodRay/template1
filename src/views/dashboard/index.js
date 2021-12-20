import { useState } from "react";
import { useSelector } from "react-redux";
import UserActions from "../../actions/user";
import { InputField } from "../../modules/adcat-ui";
import "../../assets/styles/user.scss";
import { toast } from "react-toastify";
export default function DashBoardPage({ ...props }) {
  const { setData } = new UserActions();
  const {
    userData: { user },
  } = useSelector((state) => state);
  const [firstname, setFirstName] = useState(user.firstname || "");
  const [lastname, setLastName] = useState(user.lastname || "");
  const [email, setEmail] = useState(user.email || "");
  const _setFormData = () => {
    setData({ firstname, lastname, email }).then(() => {
      toast.success("Process Completed");
    });
  };
  return (
    <div className="wrapper dashboard-page">
      <h1>DashBoard Page</h1>
      <section>
        <div className="info-wrapper">
          <p>
            Name:{" "}
            <b>
              {user.firstname} {user.lastname}
            </b>
          </p>
          <p>
            email: <b>{user.email}</b>
          </p>
        </div>
      </section>
      <section>
        <div className="user-form-wrapper">
          <div className="row">
            <InputField
              type="text"
              className="text-field"
              label="First Name"
              name="firstname"
              value={firstname}
              placeholder="John"
              onChange={(value) => {
                setFirstName(value);
              }}
              textStyle="uppercase"
              iconLeft={<i className="fas fa-user" />}
            />
          </div>
          <div className="row">
            <InputField
              type="text"
              className="text-field"
              label="Last Name"
              name="lastname"
              value={lastname}
              placeholder="Doe"
              onChange={(value) => {
                setLastName(value);
              }}
              textStyle="uppercase"
              iconLeft={<i className="fas fa-user" />}
            />
          </div>
          <div className="row">
            <InputField
              type="text"
              className="text-field"
              label="Email Address"
              name="email"
              value={email}
              placeholder="johndeo@test.com"
              onChange={(value) => {
                setEmail(value);
              }}
              textStyle="uppercase"
              iconLeft={<i className="fas fa-envelope" />}
            />
          </div>
          <div className="row">
            <button onClick={() => _setFormData()}>Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}
