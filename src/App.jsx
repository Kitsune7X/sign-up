// import { useState } from "react";

const App = () => {
  return (
    <div className="form-container">
      <div id="hero">
        <div>
          <img
            src="./src/assets/logo-med.png"
            alt="website-logo"
            width={70}
            height={70}
          />
          <h1>Foxy</h1>
        </div>
      </div>

      <div>
        <form>
          <label htmlFor="">
            Username:
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default App;
