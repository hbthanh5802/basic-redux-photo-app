import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx('wrapper')}>
      <h1>Page Not Found. 404</h1>
    </div>
  );
}

export default NotFound;
