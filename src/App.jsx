import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '@/components/NotFound';
import MainPage from '@/features/Photo/pages/MainPage';
import AddEditPage from '@/features/Photo/pages/AddEditPage';
import Photo from '@/features/Photo';

import './App.scss';
import DefaultLayout from '@/layouts/DefaultLayout';

// Lazy lode - Code splitting
// const Photo = React.lazy(() => import('@/features/Photo'));

function App() {
  const routePath = window.location.pathname;
  console.log(routePath);
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DefaultLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
