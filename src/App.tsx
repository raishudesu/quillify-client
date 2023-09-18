import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import SignIn from "./pages/SignIn/SignIn";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blog/Blog";
import Profile from "./pages/Profile/Profile";
import Protected from "./components/Protected";
import ScrollToTop from "./components/ScrollToTop";
import NewFooter from "./components/NewFooter";
import MainProfile from "./pages/Profile/components/MainProfile";
import Settings from "./pages/settings/Settings";
import SettingsProfile from "./pages/settings/components/SettingsProfile";
import SettingsAccount from "./pages/settings/components/SettingsAccount";

const LazySignInForm = lazy(
  () => import("./pages/SignIn/components/SignInForm")
);
const LazySignUpForm = lazy(
  () => import("./pages/SignIn/components/SignUpForm")
);
const LazyCreateBlog = lazy(() => import("./pages/CreateBlog/CreateBlog"));
const LazyUpdateBlog = lazy(() => import("./pages/UpdateBlog/UpdateBlog"));

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
            <Route path="/profile/createBlog" element={<LazyCreateBlog />} />
            <Route path="/profile/editBlog" element={<LazyUpdateBlog />} />
            <Route element={<Settings />}>
              <Route path="/profile/settings" element={<SettingsProfile />} />
              <Route
                path="/profile/settings/account"
                element={<SettingsAccount />}
              />
            </Route>
          </Route>
        </Routes>

        <NewFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
