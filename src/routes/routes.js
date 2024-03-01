//Layouts
import config from "../config/routes";

//Pages
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import DefaultLayout from "../layouts/DefaultLayout";

//public routes
const publicRoutes = [
  { path: config.login, component: Login, layout: DefaultLayout },
  { path: config.register, component: Register, layout: DefaultLayout },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
