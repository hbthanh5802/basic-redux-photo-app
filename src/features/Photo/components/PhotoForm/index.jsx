import { PHOTO_CATEGORY_OPTIONS } from '@/constants/global';
import InputField from '@/custom-fields/InputField';
import RandomPhotoField from '@/custom-fields/RandomPhotoField';
import SelectField from '@/custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.any,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

// eslint-disable-next-line no-unused-vars
function PhotoForm(props) {
  const { initialValues } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    categoryId: Yup.number().required('This field is required'),
    photo: Yup.string().required('This field is required'),
  });

  // npm i --save react-select
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                {isSubmitting && (
                  <Spinner style={{ marginRight: 8 }} size="sm" />
                )}
                <span>Submit</span>
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
