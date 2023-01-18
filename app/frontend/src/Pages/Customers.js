import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import { api, getCustomers } from '../Services/Api';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      fetchCustomers();
    })();
  }, []);

  const fetchCustomers = async () => {
    const response = await getCustomers();

    const { customers } = response.data.customers;

    setCustomers(customers);
    setLoading(false);

    const token = localStorage.getItem('token');

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return(
    <>
      <Header />
      <div className="customers">
        <div className="title">
          <h1>Customers</h1>
        </div>
        <div className="customersCards">
          {
            loading ? <Loading /> : <p> oi </p>
          }
        </div>
      </div>
    </>
  )
}
