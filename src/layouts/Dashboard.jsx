import React from "react";
import Home from "../pages/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import CreditApplication from "../components/CreditApplication";
import CreditList from '../components/CreditList'
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="credit-application" element={<CreditApplication/>} />
        <Route path="credits" element={<CreditList/>} />
      </Routes>
    </div>
  );
}
