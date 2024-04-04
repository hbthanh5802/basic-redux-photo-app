import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NotFound from '@/components/NotFound';
import MainPage from '@/features/Photo/pages/MainPage';
import AddEditPage from '@/features/Photo/pages/AddEditPage';
import SignInPage from '@/features/Auth/pages/SignIn';
import Photo from '@/features/Photo';
// import productApi from '@/api/productApi';

import './App.scss';
import DefaultLayout from '@/layouts/DefaultLayout';

// Lazy lode - Code splitting
// const Photo = React.lazy(() => import('@/features/Photo'));

function App() {
  const routePath = window.location.pathname;
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     try {
  //       const params = { _page: 1, _limit: 10 };
  //       const response = await productApi.getAll(params);
  //       console.log(response);
  //     } catch (error) {
  //       console.log('Failed to fetch product list', error);
  //     }
  //   };

  //   fetchProductList();
  // }, []);

  return (
    <BrowserRouter>
      <div className="photo-app">
        <DefaultLayout>
          {routePath === '/' && <Navigate to={'/photo'} />}
          <Routes>
            <Route path="photo" element={<Photo />}>
              <Route index element={<MainPage />} />
              <Route path="add" element={<AddEditPage />} />
              <Route path=":photoId" element={<AddEditPage />} />
            </Route>
            <Route path="/sign-in" Component={<SignInPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DefaultLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
