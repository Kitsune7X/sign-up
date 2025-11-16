import FlavorText from '../components/FlavorText';

const App = () => {
  return (
    <div className='form-container'>
      <Hero
        id='hero'
        src='/logo-med.png'
        alt='Website logo'
        size={70}
        title='FOXY'
      />

      <div className='sign-up-section'>
        <div>
          <FlavorText />
        </div>
        <form>
          <h2>Sign Up Now!</h2>
          <section>
            <div>
              <label htmlFor='fname'>
                First name*:
                <input type='text' required={true} id='fname' />
              </label>
              <label htmlFor='lname'>
                Last name*:
                <input type='text' required={true} id='lname' />
              </label>
            </div>

            <div>
              <label htmlFor='email'>
                Email*:
                <input type='email' required={true} id='email' />
              </label>
              <label htmlFor='phone'>
                Phone number:
                <input type='tel' required={false} id='phone' />
              </label>
            </div>

            <div>
              <label htmlFor='password'>
                Password*:
                <input
                  type='password'
                  required={true}
                  minLength={8}
                  id='password'
                />
              </label>
              <label htmlFor='confirm-password'>
                Confirm Password*:
                <input
                  type='password'
                  required={true}
                  minLength={8}
                  id='confirm-password'
                />
              </label>
            </div>
          </section>

          <section>
            <button type='submit'>Create an Account</button>
            <p>
              Already have an Account ? <a href='#'>Log in</a>
            </p>
          </section>
        </form>
      </div>
    </div>
  );
};

export default App;

// ---------- Component ----------
const Hero = ({ id, src, alt, size, title }) => {
  return (
    <div id={id}>
      <div>
        <img src={src} alt={alt} width={size} height={size} />
        <h1>{title}</h1>
      </div>
    </div>
  );
};
