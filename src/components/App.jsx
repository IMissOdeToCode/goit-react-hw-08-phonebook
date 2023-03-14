import { Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';
import PhoneBookPage from './pages/PhoneBookPage/PhoneBookPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PhoneBookPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
};

//bundle.js:2728 The object notation for `createReducer` is deprecated,
// and will be removed in RTK 2.0.
// Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer
