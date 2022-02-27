import React from "react";
import Home from "../pages/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import CreditApplication from "../components/CreditApplication";
import CreditList from '../components/CreditList'
import { ToastContainer } from "react-toastify";
import CreditIdentityNumber from "../components/CreditIdentityNumber";
import CreditUpdate from "../components/CreditUpdate";
import CustomerList from "../components/CustomerList";
import CustomerAdd from "../components/CustomerAdd";
import CustomerUpdate from "../components/CustomerUpdate";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="credit-application" element={<CreditApplication/>} />
        <Route path="credits" element={<CreditList/>} />
        <Route path="/get/:identityNumber" element={<CreditIdentityNumber/>} />
        <Route path="/update/credit/:identityNumber" element={<CreditUpdate/>} />
        <Route path="customer/add" element={<CustomerAdd/>} />
        <Route path="customers" element={<CustomerList/>} />
        <Route path="/update/customer/:identityNumber" element={<CustomerUpdate/>} />

      </Routes>
    </div>
  );
}
