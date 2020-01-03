import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import Upgrade from "views/Upgrade.jsx";
import Landing from "views/Landing.jsx";
import Bank from "views/Bank.jsx";
import Chat from "views/Chatroom.jsx";
import Blackboard from "views/Blackboard.jsx";
import Calendar from "views/Calendar.jsx";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Kitchen from "views/Kitchen";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "HomeBase",
    icon: "pe-7s-home",
    component: Dashboard,
    layout: "/admin"
  },
  {
    invisible: true,
    path: "/bank",
    name: "Bank",
    icon: "pe-7s-cash",
    component: Bank,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "pe-7s-ribbon",
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/blackboard",
    name: "Blackboard",
    icon: "pe-7s-ribbon",
    component: Blackboard,
    layout: "/admin"
  },
  {
    path: "/chatroom",
    name: "Familyroom",
    icon: "pe-7s-chat",
    component: Chat,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Home Planning",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/kitchen",
    name: "Meal Planning",
    icon: "pe-7s-cart",
    component: Kitchen,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Account",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  { // This is not the acutal login page using routes for testing.
    path: "/landing",
    name: "Root Landing Page",
    icon: "pe-7s-unlock",
    component: Landing,
    layout: "/admin"
  },
  { 
    path: "/login",
    name: "Login Page",
    icon: "pe-7s-unlock",
    component: Login,
    layout: "/admin"
  },
  {
    invisible: false,
    path: "/register",
    name: "Register",
    icon: "pe-7s-unlock",
    component: Register,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/admin"
  }
];

export default dashboardRoutes;
