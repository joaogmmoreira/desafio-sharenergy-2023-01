const fetchDogsAPI = async () => {
  const response = await fetch('https://random.dog/doggos');
  const json = await response.json();

  return json;
}

export {
  fetchDogsAPI,
}
