import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/authentication/login";
import Signup from "./pages/authentication/signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { login } from "./slice/user/user.slice";
// import { loginUserThunk } from "./slice/user/user.thunk";
import ProtectedRoutes from "./components/protectedRoutes";
import {
  getOtherUsersThunk,
  getUserProfileThunk,
} from "./slice/user/user.thunk";

function App() {
  // const store = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  // console.log(store.isAuthenticated);

  // for calling hte login function

  useEffect(() => {
    (async () => {
      await dispatch(getUserProfileThunk());
      await dispatch(getOtherUsersThunk());
    })();
  }, []);

  return (
    <>
      {/* <h1 className="text-2xl">Hello How are YOu</h1> */}
      {/* <button class="btn btn-secondary">Secondary</button> */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
