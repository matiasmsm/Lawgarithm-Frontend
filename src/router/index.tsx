import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Routes>
        {routes.map((routeItem) => {
          const Component = lazy(() => import(`../pages/${routeItem.component}`));
          
          if (Array.isArray(routeItem.path)) {
            return routeItem.path.map((path) => (
              <Route
                key={`${routeItem.component}-${path}`}
                path={path}
                element={<Component />}
              />
            ));
          }

          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
