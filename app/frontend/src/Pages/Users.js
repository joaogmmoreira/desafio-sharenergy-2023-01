import React, { useEffect, useState } from "react";
import { fetchUsersAPI } from "../Services/UserService";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import UserCard from "../Components/UserCard";
import Loading from "../Components/Loading";
import '../Styles/Users.css';

export default function Users() {

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [userData2, setUserData2] = useState([]);
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(true);
  const [search, setSearch] = useState({
    searchBoxInput: "",
  });

  useEffect(() => {
    const generateUsers = async () => {
      const users = await fetchUsersAPI(page);
      setLoading(false);
      setUserData(users.results);
      setUserData2(users.results);      
  
      return users;
    }
    generateUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [search.searchBoxInput]);

  useEffect(() => {
    const generateUsers = async () => {
      const users = await fetchUsersAPI(page);
      setUserData(users.results);
      setUserData2(users.results);
    }    
    generateUsers();
    disablePreviousButton();
  }, [page]);

  const renderUsers = () => {
    return userData2.map((element) => {
      const { name, email, picture, registered, login } = element;
      return (
        <UserCard
          key={ `${name.first} ${name.last}` }
          firstName={ name.first }
          lastName={ name.last }
          email={ email }
          picture={ picture.large }
          date = { registered.age }
          login={ login.username }
        />
      )
    }) 
  };

  const filterUsers = () => {
    const filteredResults =  userData.filter((element) => {
      const { name, email, login } = element;
      const { searchBoxInput } = search;
      const searchInputToLC = searchBoxInput.toLowerCase();

      return name.first.toLowerCase().includes(searchInputToLC) ||
      name.last.toLowerCase().includes(searchInputToLC) ||
      email.toLowerCase().includes(searchInputToLC) ||
      login.username.toLowerCase().includes(searchInputToLC);
    });
    setUserData2(filteredResults);

    return filteredResults
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const updateState = {
      ...search,
      [name]: value,
    };
    setSearch(updateState);
    filterUsers();
  };

  const pageButtons = async (event) => {
    const { innerText } = event.target;

    if (innerText === 'Previous') setPage(page - 1);     
    
    if (innerText === 'Next') setPage(page + 1); 
  }

  const disablePreviousButton = () => {
    if (page === 1) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }

  return (
    <>
      <Header/>
      <div id="searchBox">
        <form>          
          <label htmlFor="searchBoxInput">Search: &nbsp;</label>          
          <input 
            name="searchBoxInput" 
            id="searchBoxInput" 
            type="text"
            onChange={onInputChange}
          />          
        </form>
      </div>
      <div id="userCardsDiv">
        { loading ? <Loading/> : renderUsers() }
      </div>  
      <div className="pageButtons">  
        <div className="previousButton">
          <Link>
            <button
              className="previousButton"
              disabled={ disable }
              onClick={ pageButtons }
            >
              Previous 
            </button>
          </Link>
        </div>
        <span>{ `Page ${page}` }</span>
        <div className="nextButton">
          <Link>
            <button
              className="nextButton"
              onClick={ pageButtons }
            >
              Next 
            </button>
          </Link>
        </div>
      </div> 
    </>
  )
}