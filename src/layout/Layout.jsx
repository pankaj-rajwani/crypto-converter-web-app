import { object } from 'prop-types';
import { configUtils } from './utils';
import { ReelBackground } from '@/components/misc';

import style from './layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={style.landing_wrapper}>
      <div className={style.reel_container}>
        <ReelBackground slides={configUtils.reelBackgroundImages} />
      </div>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: object.isRequired,
};
