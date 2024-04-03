import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <a
          href="https://github.com/hbthanh5802"
          className={cx('logo-title')}
          rel="noopener noreferrer"
          target="_blank"
        >
          ThanK
        </a>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            cx('home-title', 'block', { active: isActive })
          }
          exact="true"
          to={'/photo'}
        >
          <p>Redux Project</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
