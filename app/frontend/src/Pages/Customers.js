import { useEffect, useState } from "react";
import CustomerRow from "../Components/CustomerRow";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import { getCustomers, registerCustomer, apiDeleteCustomer, setToken } from '../Services/Api';
import '../Styles/Customers.css';


export default function Customers() {
  const [customersData, setCustomersData] = useState([]);
  const [customersData2, setCustomersData2] = useState([]);
  const [search, setSearch] = useState({
    searchBoxInput: "",
  });
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    telephone: "",
    address: "",
    ssn: "",
  });

  useEffect(() => {
    (async () => {
      fetchCustomers();
    })();
  }, []);

  useEffect(() => {
    filterCustomers();
  }, [search.searchBoxInput]);

  const fetchCustomers = async () => {
    const token = localStorage.getItem('token');
    setToken(token);
    
    const response = await getCustomers(token);
    
    const { customers } = response.data.customers;
    
    setCustomersData(customers);
    setCustomersData2(customers);
    setLoading(false);    
  }

  const deleteCustomer = async (id, token) => {
    await apiDeleteCustomer(id, token);
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
  };

  const filterCustomers = () => {
    const filteredResults =  customersData.filter((element) => {
      const { fullName, email, telephone, address, ssn } = element;
      const { searchBoxInput } = search;
      const searchInputToLC = searchBoxInput.toString().toLowerCase();      

      return fullName.toString().toLowerCase().includes(searchInputToLC) ||
      email.toString().toLowerCase().includes(searchInputToLC) ||
      telephone.toString().toLowerCase().includes(searchInputToLC) ||
      address.toString().toLowerCase().includes(searchInputToLC) ||
      ssn.toString().toLowerCase().includes(searchInputToLC);
    });
    setCustomersData2(filteredResults);

    return filteredResults
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const updateState = {
      ...search,
      [name]: value,
    };
    setSearch(updateState);
    filterCustomers();
  };

  const onRegisterChange = (event) => {
    const { name, value } = event.target;
    const updateState = {
      ...form,
      [name]: value,
    };
    setForm(updateState);
  };

 
  const onBtnClick = async (event) => {
    event.preventDefault();

    const registeredCustomer = await registerCustomer(form);

    setForm({
      fullName: "",
      email: "",
      telephone: "",
      address: "",
      ssn: "",
    });
  
    await fetchCustomers();
    return registeredCustomer;
  }

  return(
    <>
      <Header />
      <div className="registerCustomers">
        <div className="registerCustomers">
          <form>
            <h2>Register Customers</h2>
            <div className="formOne">
              <div>
                <label htmlFor="fullName">Full Name</label>
              </div>       
              <input 
                name="fullName" 
                id="fullName" 
                type="text"
                value={form.fullName}
                onChange={onRegisterChange}
              />
            </div>
            <div className="formEmail">
              <div>
                <label htmlFor="email">Email</label>
              </div>        
              <input 
                name="email" 
                id="email" 
                type="text"
                value={form.email}
                onChange={onRegisterChange}
              />
            </div>
            <div className="formTelephone">
              <div>
                <label htmlFor="telephone">Telephone</label>
              </div>        
              <input 
                name="telephone" 
                id="telephone" 
                type="text"
                value={form.telephone}
                onChange={onRegisterChange}
              />
              </div>
              <div className="formAddress">
                <div>
                  <label htmlFor="address">Address</label>
                </div>         
                <input 
                  name="address" 
                  id="address" 
                  type="text"
                  value={form.address}
                  onChange={onRegisterChange}
                />
              </div>
              <div className="formSSN">
                <div>
                  <label htmlFor="ssn">SSN</label> 
                </div>
                <input 
                  name="ssn" 
                  id="ssn" 
                  type="text"
                  value={form.ssn}
                  onChange={onRegisterChange}
                />
              </div>
              <div className="sbtBtn">
              <button 
                id="submitFormBtn"
                type="submit"
                onClick={onBtnClick}
                // disabled={button}
              >
                Submit
              </button>
            </div>                
          </form>
        </div>
      </div>
      <div id="searchBar">
        <form>
          <div>
            <label htmlFor="searchBoxInput">Search</label>          
          </div>         
          <input 
            name="searchBoxInput" 
            id="searchBoxInput" 
            type="text"
            onChange={onInputChange}
          />        
        </form>
      </div>
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
