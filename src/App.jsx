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

      <div className="sign-up-section">
        <div>
          <span>
            The Hokkaido red fox grows a thicker, softer coat each winter — its
            fur glowing golden even in the deep snow, a beacon of warmth in the
            cold north.
          </span>
        </div>
        <form>
          <h2>Sign Up Now!</h2>
          <section>
            <div>
              <label htmlFor="">
                First name:
                <input type="text" />
              </label>
              <label htmlFor="">
                Last name:
                <input type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Email:
                <input type="text" />
              </label>
              <label htmlFor="">
                Phone number:
                <input type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Password:
                <input type="text" />
              </label>
              <label htmlFor="">
                Confirm Password:
                <input type="text" />
              </label>
            </div>
          </section>

          <section>
            <button type="submit">Create an Account</button>
            <p>
              Already have an Account ? <a href="#">Log in</a>
            </p>
          </section>
        </form>
      </div>
    </div>
  );
};

export default App;
