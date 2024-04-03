import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '../components/Header';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

function DefaultLayout({ children = null }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
