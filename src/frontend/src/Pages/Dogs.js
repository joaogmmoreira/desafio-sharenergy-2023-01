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

  const photoOrVideo = () => {
    if(chosenDog.includes('mpeg') || 
      chosenDog.includes('webm') || 
      chosenDog.includes('mp4')) {
        console.log('oi')
      return (
        <video
          controls
          autoPlay
          width="400">
          <source
            src={ `https://random.dog/${chosenDog}` }
            type="video/mp4" />
        </video>
      )
    }
    return (
      <img
        id="dogsImg"
        src={ `https://random.dog/${chosenDog}` }
        alt={ 'Fluffy' }
      />
    )
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
        {
          photoOrVideo()
        }
      </div>
    </>
  )
}