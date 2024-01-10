import { Logo } from '@/assets/icons';
import { homeConstants } from '@/utils/constants';

import style from '../../home.module.css';

export const Header = () => {
  return (
    <div className={style.header_wrapper}>
      <div className={style.header}>
        <Logo style={style} height='110px' width='110px' />
        <div className={style.heading_wrapper_1}>
          <div className={style.heading_wrapper_2}>
            <p className={style.heading_part_1}>{homeConstants.HEADING_PART_1}</p>
            <p className={style.heading_part_2}>{homeConstants.HEADING_PART_2}</p>
          </div>
        </div>
      </div>
      <p className={style.tagline}>{homeConstants.TAGLINE}</p>
    </div>
  );
};
