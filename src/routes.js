/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Clients from "views/Icons.js";
import Habitaciones from "views/Map.js";
import Reservas from "views/Notifications.js";
import Pagos from "views/TableList.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/clientes",
    name: "Clientes",
    rtlName: "الرموز",
    icon: "tim-icons icon-badge",
    component: <Clients />,
    layout: "/admin",
  },
  {
    path: "/habitaciones",
    name: "Habitaciones",
    rtlName: "خرائط",
    icon: "tim-icons icon-key-25",
    component: <Habitaciones />,
    layout: "/admin",
  },
  {
    path: "/reservas",
    name: "Reservaciones",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Reservas />,
    layout: "/admin",
  },
  {
    path: "/pagos",
    name: "Pagos",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-money-coins",
    component: <Pagos />,
    layout: "/admin",
  },
];
export default routes;
