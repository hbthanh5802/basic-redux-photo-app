import Banner from '@/components/Banner';
import PhotoForm from '@/features/Photo/components/PhotoForm';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { addPhoto, updatePhoto } from '@/features/Photo/PhotoSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { randomNumber } from '@/utils/common';

AddEditPage.propTypes = {};

// eslint-disable-next-line no-unused-vars
function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photoData = useLocation().state?.photo;
  // console.log('photoData', photoData);

  const initialValues = photoData
    ? photoData
    : {
        title: '',
        categoryId: null,
        photo: '',
      };

  const handleSubmit = (values) => {
    console.log('Form submit: ', values);

    setTimeout(() => {
      const action = photoData
        ? updatePhoto(values)
        : addPhoto({ ...values, id: randomNumber(1000, 9999) });
      dispatch(action);
      navigate('/photo');
    }, 2000);
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
