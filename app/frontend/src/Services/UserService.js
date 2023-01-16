const fetchUsersAPI = async () => {
  const response = await fetch('https://randomuser.me/api/?page=3&results=28&seed=abc');
  const json = await response.json();

  return json;
}

export {
  fetchUsersAPI,
}
