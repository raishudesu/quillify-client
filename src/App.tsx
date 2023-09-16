import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import SignIn from "./pages/SignIn/SignIn";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blog/Blog";
import Profile from "./pages/Profile/Profile";
import Protected from "./components/Protected";
import MainProfile from "./pages/Profile/components/MainProfile";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import ScrollToTop from "./components/ScrollToTop";
import NewFooter from "./components/NewFooter";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";

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
        <ScrollToTop />
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
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          >
            <Route path="/profile" element={<MainProfile />} />
            <Route path="/profile/createBlog" element={<CreateBlog />} />
            <Route path="/profile/editBlog" element={<UpdateBlog />} />
          </Route>
        </Routes>

        <NewFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
