import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NotFound from '@/components/NotFound';
import SignInPage from '@/features/Auth/pages/SignIn';
import Photo from '@/features/Photo';
import AddEditPage from '@/features/Photo/pages/AddEditPage';
import MainPage from '@/features/Photo/pages/MainPage';
import productApi from '@/api/productApi';

import DefaultLayout from '@/layouts/DefaultLayout';
import './App.scss';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

// Configure Firebase.
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  const routePath = window.location.pathname;
  // const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }
    };

    fetchProductList();
  }, []);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        // setIsSignedIn(!!user);
        if (!user) {
          console.log('User is not logged in');
          return;
        }
        console.log('Logged in user: ', user.displayName);
        const token = await user.getIdToken();
        console.log('Token: ', token);
      });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const handleGetProductList = async () => {
    try {
      const params = { _page: 1, _limit: 10 };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log('Failed to fetch product list', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="photo-app">
        <Button onClick={handleGetProductList}>Fetch Product List</Button>
        <DefaultLayout>
          {routePath === '/' && <Navigate to={'/photo'} />}
          <Routes>
            <Route path="photo" element={<Photo />}>
              <Route index element={<MainPage />} />
              <Route path="add" element={<AddEditPage />} />
              <Route path=":photoId" element={<AddEditPage />} />
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DefaultLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
