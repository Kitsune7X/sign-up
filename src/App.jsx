import { useEffect, useState } from 'react';

const App = () => {
  const [para, setPara] = useState([]);
  const [counter, setCounter] = useState(0);
  const text =
    'Foxes use their fluffy winter tails (called “brushes”) as a built-in blanket. On freezing nights, they curl into a tight ball and wrap the tail over their nose to trap warm air, keeping their body heat from escaping.';
  const arr = Array.from(text);
  console.log(para);
  // console.log(arr);

  console.log(text.at(counter));

  useEffect(() => {
    const idx = setInterval(() => {
      setPara((p) => {
        if (p.length === arr.length) {
          clearInterval(idx);
          return p;
        }
        return p.concat(arr[p.length]);
      });
    }, 50);
    return () => {
      clearInterval(idx);
    };
  }, []);

  return (
    <div className='form-container'>
      <div id='hero'>
        <div>
          <img
            src='/logo-med.png'
            alt='website-logo'
            width={70}
            height={70}
          />
          <h1>Foxy</h1>
        </div>
      </div>

      <div className='sign-up-section'>
        <div>
          <p>{para}</p>
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
        {/* <button onClick={() => concatLetter(arr)}>debug button</button>
        <p>Counter: {counter}</p> */}
      </div>
    </div>
  );
};

export default App;

// const empty = [];
// console.log(empty);

// const text =
//   'The Hokkaido red fox grows a thicker, softer coat each winter — its fur glowing golden even in the deep snow, a beacon of warmth in the cold north.';
// const arr = Array.from(text);
// arr.forEach((item) => empty.concat(item));
// console.log(empty);
