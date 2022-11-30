import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Register from 'pages/RegisterPage/Register';
import LogIn from 'pages/LoginPage/LogIn';
import Home from 'pages/HomePage/Home';
import Contacts from 'pages/ContactsPage/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route path="home" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="logIn" element={<LogIn />} />
      </Route>
    </Routes>
  );
};
