import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
};

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
            on
            photo={photo}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
