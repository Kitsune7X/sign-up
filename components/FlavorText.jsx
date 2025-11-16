import { useState, useEffect } from 'react';

const FlavorText = () => {
  const [para, setPara] = useState([]);
  const text =
    'Foxes use their fluffy winter tails (called “brushes”) as a built-in blanket. On freezing nights, they curl into a tight ball and wrap the tail over their nose to trap warm air, keeping their body heat from escaping.';
  const arr = Array.from(text);

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

  return <p>{para}</p>;
};

export default FlavorText;
