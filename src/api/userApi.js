import firebase from 'firebase/compat/app';

const userApi = {};

userApi.getMe = () => {
  // TODO: Call API to get current user
  return new Promise((resolve, reject) => {
    // reject(new Error('Error in getMe Api'));
    // return;

    setTimeout(() => {
      const currentUser = firebase.auth().currentUser;
      resolve({
        id: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
        photoUrl: currentUser.photoURL,
      });
    }, 1000);
  });
};

export default userApi;
