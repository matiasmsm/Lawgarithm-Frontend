const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/login"],
    exact: true,
    component: "Login",
  },
  {
    path: "/dashboard",
    exact: true,
    component: "Dashboard",
    private: true,
  },
  {
    path: ["/", "/signup"],
    exact: true,
    component: "Signup",
  },
  {
    path: ["/", "/regulations"],
    exact: true,
    component: "Regulations",
  },
  {
    path: "/regulation/:id",
    exact: true,
    component: "Regulation",
  },
];

export default routes;