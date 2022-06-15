import "./App.css";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from 'react-router-dom'
import { MainContainer } from "./component/MainContainer/MainContainer";
import Home from "./pages/Home/Home";
import { LoginPage, SignupPage } from "./pages/AuthPage/";
import PrivateRoute from './component/private-route/PrivateRoute'
import RestrictedRoute from './component/restricted-route/RestrictedRoute';

function App() {

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainContainer>
                <Home />
              </MainContainer>
            </PrivateRoute>
          }
        />
        <Route element={<RestrictedRoute />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer
        theme="colored"
        autoClose={1500}
        position={"top-right"}
        className={"toast-container"}
      />
    </div>
  );
}

export default App;
