
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nikeData } from "../data/nikeData";
function Home() {
  const navigate = useNavigate()

  //Create handleSubmit
  const [search, setSearch] = useState("")
  const [shoeNotFound, setShoeNotFound] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    // Find the index of the shoe in the nikeData array based on the user's search
    const shoeIndex = nikeData.findIndex(
      (shoe) => shoe.name.toLowerCase() === search.toLowerCase()
    );
    if (shoeIndex !== -1) {
      // Navigate to the shoe page with the shoe's index as a URL parameter
      navigate(`/shoes/`);
    } else {
      setShoeNotFound(true)
      
      // console.log("Shoe not found");
    }
  }
  //Create handleChange 
    function handleChange(e){
      setSearch(e.target.value)
      console.log(e.target.value);
    }
  return (
    <div>
      {/* <h1 className="title">Nike</h1> */}
      <form onSubmit={handleSubmit} >
        <div className="search-input">
          <input placeholder="Search for Shoes" value={search} onChange={handleChange}></input>
          <button id="btn-submit" type="submit">
            Search
          </button>
        </div>
       {shoeNotFound && <p>Shoe Not Found</p>}
      </form>
      <h1 id="collection">Enjoy our 2023 collection</h1>
      <div className="home">
        <img className="home-shoes" src={nikeData[3].image} alt="shoe" />
        <img className="home-shoes" src={nikeData[4].image} alt="shoe" />
        <img className="home-shoes" src={nikeData[5].image} alt="shoe" />
      </div>
      <div className="shoe-name">
        <p className="shoe-name">{nikeData[3].name}</p>
        <p className="shoe-name">{nikeData[4].name}</p>
        <p className="shoe-name">{nikeData[5].name}</p>
      </div>
    </div>
  );
}

export default Home;
