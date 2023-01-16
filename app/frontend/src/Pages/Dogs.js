import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { fetchDogsAPI } from "../Services/DogsService";
import Loading from "../Components/Loading";
import '../Styles/Dogs.css';

export default function Dogs() {
  const [dogsData, setDogsData] = useState([]);
  const [chosenDog, setChosenDog] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateDogs = async () => {
      const dogs = await fetchDogsAPI();
      
      setDogsData(dogs);
      setLoading(false);

    }
    generateDogs();      
  }, []);

  useEffect(() => {
    pickingDogs();
  }, [dogsData]);

  const pickingDogs = async () => {
    setLoading(true);
    if (dogsData.length) {
      const randomNumber = Math.floor(Math.random() * dogsData.length);
      setChosenDog(dogsData[randomNumber])
      
      setLoading(false);
    }
  }

  const photoOrVideo = () => {
    if(chosenDog.includes('mpeg') || 
      chosenDog.includes('webm') || 
      chosenDog.includes('mp4')) {
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
          loading ? <Loading/> : photoOrVideo()
        }
      </div>
    </>
  )
}