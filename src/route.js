import Home from "./containers/Home/Home";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import UserProfile from "./containers/UserProfile/UserProfile";
import Stock from "./containers/Stock/Stock";

import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const routes = [
  {
    path: "/SignIn",
    component: SignIn,
    name: "SIGN IN",
    access: "PUBLIC",
    exact: false,
    strict: false,
    visibility: "visible",
  },
  {
    path: "/SignUp",
    component: SignUp,
    name: "SIGN UP",
    access: "PUBLIC",
    exact: false,
    strict: false,
    visibility: "visible",
  },
  {
    path: "/Home",
    component: Home,
    name: "HOME",
    access: "PRIVATE",
    exact: false,
    strict: false,
    icon: HomeIcon,
    visibility: "visible",
  },
  {
    path: "/UserProfile",
    component: UserProfile,
    name: "USER PROFILE",
    access: "PRIVATE",
    exact: false,
    strict: false,
    icon: AccountBoxIcon,
    visibility: "visible",
  },
  {
    path: "/Stock/display",
    component: Home,
    name: "STOCK DISPLAY",
    access: "PRIVATE",
    exact: true,
    strict: true,
    icon: AccountBalanceIcon,
    visibility: "visible",
  },
  {
    path: "/Stock/add",
    component: Stock,
    name: "STOCK ADD",
    access: "PRIVATE",
    exact: true,
    strict: true,
    icon: AccountBalanceIcon,
    visibility: "visible",
  },
  {
    path: "/Stock/update",
    component: Stock,
    name: "STOCK UPDATE",
    access: "PRIVATE",
    exact: true,
    strict: true,
    icon: AccountBalanceIcon,
    visibility: "hidden",
  },
];

export default routes;
