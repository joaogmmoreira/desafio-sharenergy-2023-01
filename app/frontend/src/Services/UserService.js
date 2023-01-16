const fetchUsersAPI = async (num) => {
  const response = await fetch(`https://randomuser.me/api/?page=${num}&results=10&seed=abc`);
  const json = await response.json();

  return json;
}

export {
  fetchUsersAPI,
}
