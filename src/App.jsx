import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import routesConfig from "./routes/routes.config";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const renderRoutes = (routes) => {
    return routes?.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <>
      <Routes>{renderRoutes(routesConfig)}</Routes>
    </>
  );
}

export default App;
