import Header from "../Components/Header";
import UserCard from "../Components/UserCard";
import { useEffect, useState } from "react";
import { fetchUsersAPI } from "../Services/UserService";
import Loading from "../Components/Loading";
import '../Styles/Users.css';

//paginação dos resultados

export default function Users() {

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [userData2, setUserData2] = useState([]);
  // const [userData3, setUserData3] = useState([]);
  const [search, setSearch] = useState({
    searchBoxInput: "",
  });

  useEffect(() => {
    const generateUsers = async () => {
      const users = await fetchUsersAPI();
      setLoading(false);
      setUserData(users.results);
      setUserData2(users.results);
  
      return users;
    }
    generateUsers();
    // splitPages();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [search.searchBoxInput]);

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

  // const splitPages = () => {
  //   while(userData2.length > 0) {
  //       setUserData3(userData2.splice(0, 14));
  //     }
  //   console.log(userData3.splice(0, 14))
  // }

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
    </>
  )
}