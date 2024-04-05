import axios from 'axios';
import queryString from 'query-string';
import firebase from 'firebase/compat/app';

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  // Logged in but current user is not fetched--> wait (10s maximum)
  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject(null);
      console.log('Reject Timeout');
    }, 10000);
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        // setIsSignedIn(!!user);
        if (!user) {
          reject(null);
        }
        const token = await user.getIdToken();
        console.log('[Axios] Token: ', token);
        resolve(token);
        unregisterAuthObserver();
        clearTimeout(waitTimer);
      });
  });
};

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
