import { useState, useEffect } from 'react';
import { string, arrayOf } from 'prop-types';

import style from './reelBackground.module.css';

export const ReelBackground = ({ slides }) => {
  const [randomSlide, setRandomSlide] = useState(() => {
    return Math.floor(Math.random() * slides.length);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomSlide(Math.floor(Math.random() * slides.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={style.screen}>
      <div
        className={style.reel}
        style={{
          backgroundImage: `url(${slides[randomSlide]})`,
        }}
      ></div>
      <div className={style.screen_content}>{randomSlide}</div>
    </div>
  );
};

ReelBackground.propTypes = {
  slides: arrayOf(string).isRequired,
};
