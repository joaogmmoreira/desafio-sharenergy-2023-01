import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { fetchDogsAPI } from "../Services/DogsService";
import '../Styles/Dogs.css';

export default function Dogs() {
  const [dogsData, setDogsData] = useState([]);
  const [chosenDog, setChosenDog] = useState();

  useEffect(() => {
    const generateDogs = async () => {
      const dogs = await fetchDogsAPI();
      
      setDogsData(dogs.slice(0, 500));
  
      return dogs;
    }
    generateDogs();
    pickingDogs();    
  }, []);

  const pickingDogs = () => {
    const randomNumber = Math.floor(Math.random() * dogsData.length);
    setChosenDog(dogsData[randomNumber])
  }

  return(
    <>
      <Header />
      <div className="dogBody">
        <button
          id="dogButton"
          onClick={() => pickingDogs()}
        >
          Another dog
        </button>
        <img
          src={`https://random.dog/${chosenDog}`}
          alt={ 'Fluffy' }
        />
      </div>
    </>
  )
}