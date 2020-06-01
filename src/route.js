import Home from "./containers/Home/Home";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import UserProfile from "./containers/UserProfile/UserProfile";
const routes = [
  {
    path: "/SignIn",
    component: SignIn,
    name: "SIGN IN",
    access:"PUBLIC",
    exact :false,
    strict : false
  },
  {
    path: "/SignUp",
    component: SignUp,
    name: "SIGN UP",
    access:"PUBLIC",
    exact :false,
    strict : false
  },
  {
    path: "/Home",
    component: Home,
    name: "HOME",
    access:"PRIVATE",
    exact :false,
    strict : false
  }, 
  {
    path: "/UserProfile",
    component: UserProfile,
    name: "USER PROFILE",
    access:"PRIVATE",
    exact :false,
    strict : false
  },
];

export default routes;
