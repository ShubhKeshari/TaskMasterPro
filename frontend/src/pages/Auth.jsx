import React from "react";
import "../styles/Auth.style.css";

function Auth() {
  return (
    <div className="auth">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label for="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button>Log in</button>
          </form>
        </div>

        <div className="register">
          <form className="form">
            <label for="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Confirm Password"
              required
            />
            <select className="input">
              <option value="manager">Manager</option>
              <option value="team-member" selected>
                Team Member
              </option>
              <option value="stakeholder">Stakeholder</option>
            </select>

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Auth };
