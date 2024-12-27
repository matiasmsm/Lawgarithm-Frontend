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
];

export default routes;