import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
Photo.propTypes = {
  children: PropTypes.node,
};

function Photo() {
  return <Outlet />;
}

export default Photo;
