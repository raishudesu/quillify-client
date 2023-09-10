import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn/SignIn";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blog/Blog";
import Profile from "./pages/Profile/Profile";
import Protected from "./components/Protected";

const LazySignInForm = lazy(
  () => import("./pages/SignIn/components/SignInForm")
);
const LazySignUpForm = lazy(
  () => import("./pages/SignIn/components/SignUpForm")
);

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<SignIn />}>
            <Route path="/auth" element={<LazySignInForm />} />
            <Route path="/auth/signup" element={<LazySignUpForm />} />
          </Route>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:postId" element={<Blog />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
