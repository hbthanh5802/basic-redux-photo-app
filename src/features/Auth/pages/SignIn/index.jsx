import firebase from 'firebase/compat/app';
import { StyledFirebaseAuth } from 'react-firebaseui';
// import PropTypes from 'prop-types';

SignInPage.propTypes = {};

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/photo',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignInPage() {
  return (
    <>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </>
  );
}

export default SignInPage;
