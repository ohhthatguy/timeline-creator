import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./AllRoutes";

const RouteComponent = () => {
  return (
    <Routes>
      {/* Public Routes Here  */}
      {publicRoutes.map((e, index) => {
        const Element = e.element;
        return <Route key={index} path={e.path} element={<Element />} />;
      })}

      {/* Protected Routes Here  */}

      {/* Protected Routes Here  */}

      {/* Catch all unmatched routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouteComponent;
