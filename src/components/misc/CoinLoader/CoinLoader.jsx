import { shape, string } from 'prop-types';

import classes from './coinLoader.module.css';

export const CoinLoader = ({ style }) => {
  return (
    <div className={`${classes.coin_loader_wrapper} ${style.spinner_wrapper}`}>
      <div className={`${classes.coin_loader} ${style.coin_loader}`} />
    </div>
  );
};

CoinLoader.propTypes = {
  style: shape({
    coin_loader_wrapper: string,
    coin_loader: string,
  }),
};

CoinLoader.defaultProps = {
  style: {},
};
