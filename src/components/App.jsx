import AppBar from './AppBar/AppBar';
import Register from 'pages/RegisterPage/Register';
import LogIn from 'pages/LoginPage/LogIn';
import Home from 'pages/HomePage/Home';
import Contacts from 'pages/ContactsPage/Contacts';
import { PrivateRoute } from './Route/PrivateRoute';
import { RestrictedRoute } from './Route/RestrictedRoute';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { useEffect } from 'react';
import { refreshUser } from 'Redux/auth/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
document.title = 'Phonebook _redux';

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Just one second please...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="logIn"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
