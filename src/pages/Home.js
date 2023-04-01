import { nikeData } from "../data/nikeData";
function Home() {
  return (
    <div>
      {/* <h1 className="title">Nike</h1> */}
      <div className = "search-input">
      <input placeholder="Search for Shoes"></input>
      <button id="btn-submit" type="submit">
        Search
      </button>
      </div>
      <h1 id="collection">Enjoy our 2023 collection</h1>
      <div className="home">
        <img className = "home-shoes" src={nikeData[3].image} alt = "shoe"/>
        <img className = "home-shoes" src={nikeData[4].image} alt = "shoe"/>
        <img className = "home-shoes"  src={nikeData[5].image} alt = "shoe"/>
      </div>
      <div className = "shoe-name">
        <p className = "shoe-name">{nikeData[3].name}</p>
        <p className = "shoe-name">{nikeData[4].name}</p>
        <p className = "shoe-name">{nikeData[5].name}</p>
      </div>
      
    </div>
  );
}

export default Home;
