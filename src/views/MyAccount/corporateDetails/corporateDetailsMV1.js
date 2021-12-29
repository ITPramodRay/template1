import React from "react";
import leftIcon from "../../../assets/images/left-icon-dark.svg";
import "./link-corporate.scss";

const CorporatDetailsMV1 = () => {
  return (
    //   Keep the markup exactly same to avoid spacing issues
    <div className="link-corporate-account-page d-flex flex-column">
      <header className="link-corporate-account">
        {/* Back btn  */}
        <button className="lca-back position-absolute text-btn">
          <img src={leftIcon} alt="" />
        </button>

        <div className="lca-inner container">
          <h2 className="lca-headline">Link Corporate Account</h2>
          <p className="lca-desc">Please enter your work email ID</p>
        </div>
      </header>
      <form className="lca-inputs-outer d-flex flex-column">
        <div className="lca-inputs">
          <div className="lca-inputs-inner container">
            <div className="email-input">
              <label htmlFor="lca-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="form-control"
                id="lca-email"
              />
            </div>

            <div className="org-input">
              <p className="org-label">Choose Organization</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chooseOrg"
                  id="opt1"
                />
                <label className="form-check-label" for="opt1">
                  HDFC Life Insurance Company LTD
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chooseOrg"
                  id="opt2"
                  checked
                />
                <label cclassNamelass="form-check-label" for="opt2">
                  HDFC Pension Management Company
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="lca-verify-holder container pb-5">
          {/* Disabled state styles also available  */}
          <button className="lca-verify">Verify</button>
        </div>
      </form>
    </div>
  );
};

export default CorporatDetailsMV1;
