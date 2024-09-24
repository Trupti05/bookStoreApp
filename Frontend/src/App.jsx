import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import AboutPage from "./about/AboutPage";
import Accounts from "./account/Accounts";
import Organization from "./components/Organization";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import AddBook from "./components/addBook";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/organization" element={<Organization />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/account"
            element={authUser ? <Accounts /> : <Navigate to="/signup" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
