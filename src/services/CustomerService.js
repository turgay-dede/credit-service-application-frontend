import axios from 'axios'

export default class CustomerService {
      add(customerDto)  {
        return axios.post("/customers/add", customerDto);
      };

      getAll()  {
        return axios.get("/customers/getall");
      };

      getCustomerByIdentityNumber(identityNumber)  {
        return axios.get("/customers/get/customer/identity-number?identityNumber="+identityNumber);
      };

      delete(id)  {
        return axios.delete("/customers/delete?customerId="+id);
      };

      update(customerDto)  {
        return axios.put("/customers/update", customerDto);
      };      
  }