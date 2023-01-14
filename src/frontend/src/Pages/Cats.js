import Header from "../Components/Header";
import { useState } from "react";
import "../Styles/Cats.css"

export default function Cats() {
  const [httpStatus, setHttpStatus] = useState("100");
 
  const onInputChange = (event) => {
    const { value } = event.target;
    setHttpStatus(value);
  }

  // const optionsForSelect = () => {
  //   const options = [
  //     100, 101, 102, 103, 104, 
  //     200, 201, 202, 203, 204, 
  //     300, 301, 302, 303, 304,
  //     400, 401, 402, 403, 404,
  //     500, 501, 502, 503, 504]

  //     return options.map((element) => {
  //       return (
  //         <option key={`${element}`} value={`${element}`}>{ element }</option>
  //       )
  //     })
  // }

  return (
    <>
      <Header />
      <div className="catBody">
        <label htmlFor="htmlStatusCat">Choose your cat as a HTTP status code:</label>          
        <input
          id="htmlStatusCat" 
          name="htmlStatusCat" 
          type="text"
          onChange={onInputChange}
        >
        </input>         
        <div className="catsDiv">
          <img
            src={ `https://http.cat/${httpStatus}`}
            alt={ httpStatus }
          />
        </div>
      </div>
    </>
  )
}