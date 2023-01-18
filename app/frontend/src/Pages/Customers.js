import { useEffect, useState } from "react";
import CustomerRow from "../Components/CustomerRow";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import { getCustomers, deleteCustomer } from '../Services/Api';
import '../Styles/Customers.css';


export default function Customers() {
  const [customersData, setCustomersData] = useState([]);
  const [customersData2, setCustomersData2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      fetchCustomers();
    })();
  }, []);

  const fetchCustomers = async () => {
    const token = localStorage.getItem('token');
    
    const response = await getCustomers(token);
    
    const { customers } = response.data.customers;
    
    setCustomersData(customers);
    setCustomersData2(customers);
    setLoading(false);    
  }

  // começar daqui \/

  const deleteCustomer = async (e) => {
    const token = localStorage.getItem('token');
    const id = e.target.value;
    // console.log(id)    
    await deleteCustomer(id, token);
    await fetchCustomers();
  }

  const renderCustomers = () => {
    return customersData2.map((row, index) => {
      const { _id, fullName, email, telephone, address, ssn } = row;
      return (
        <tbody>
          <CustomerRow
            index={ index }
            key={ _id }
            fullName={ fullName }
            email={ email }
            telephone={ telephone }
            address={ address }
            ssn={ ssn }
            id={ _id }
            deleteCustomer={deleteCustomer}       
          />
        </tbody>
      )
    });
  }

  return(
    <>
      <Header />
      <div className="customers">
        <div className="title">
          <h1>Customers</h1>
        </div>
        <div className="customersTable">
          {
            loading ? <Loading /> :  <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Address</th>
                <th>SSN</th>          
              </tr>
            </thead>            
              {
                renderCustomers()
              }
          </table>
          }
        </div>
      </div>
    </>
  )
}
