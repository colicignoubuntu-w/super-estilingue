import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Ticket from "../pages/Ticket/Ticket";
import Success from "../pages/Success/Success";
import Checkout from "../pages/Checkout/Checkout";
import Checkin from "../pages/Checkin/Checkin";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route
            path="/ticket/:code"
            element={<Ticket />}
          />

          <Route
            path="/success"
            element={<Success />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/checkin"
            element={<Checkin />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;