import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '@/components/Banner';
import Images from '@/constants/images';
import PhotoList from '@/features/Photo/components/PhotoList';
import { useDispatch, useSelector } from 'react-redux';
import { removePhoto } from '@/features/Photo/PhotoSlice';

function MainPage() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log('List of photos', photos);
  const handleEditClick = (photo) => {
    navigate(`/photo/${photo.id}`, {
      state: { photo },
    });
  };

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link style={{ fontSize: '18px' }} to="/photo/add">
          Add new photo
        </Link>
      </Container>

      <PhotoList
        onPhotoEditClick={handleEditClick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
        photoList={photos}
      />
    </div>
  );
}

export default MainPage;
