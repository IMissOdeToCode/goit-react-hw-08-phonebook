import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';

import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

import PhoneBookPage from '../pages/PhoneBookPage/PhoneBookPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhoneBookPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </>
  );
};

//bundle.js:2728 The object notation for `createReducer` is deprecated,
// and will be removed in RTK 2.0.
// Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer
