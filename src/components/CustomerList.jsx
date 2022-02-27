import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerService from "../services/CustomerService";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  let customerService = new CustomerService();
  useEffect(() => {
    getAllMethod();
  });

  const getAllMethod = () => {
    customerService.getAll().then((result) => setCustomers(result.data.data));
  };

  const onClickDelete = (id) => {
    customerService.delete(id).then((result) => console.log(id));
    getAllMethod();
  };

  return (
    <div>
      <div className="mb-1">
        <Link to="/customer/add" className="btn btn-light c-add" type="submit">
          Kullanıcı Ekle
        </Link>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ad Soyad</th>
            <th scope="col">Kimlik Numarası</th>
            <th scope="col">Aylık Gelir</th>
            <th scope="col">Telefon Numarası</th>
            <th colSpan={2}>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <th scope="row">{customer.id}</th>
              <td>{customer.fullName}</td>
              <td>{customer.identityNumber}</td>
              <td>{customer.monthlyIncome}</td>
              <td>{customer.phoneNumber}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onClickDelete(customer.id)}
                >
                  Sil
                </button>
              </td>

              <td>
                <Link to={`/update/customer/${customer.identityNumber}`}>
                  <button className="btn btn-success">Güncelle</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
