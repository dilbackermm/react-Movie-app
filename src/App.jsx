import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {

  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect( () => {
console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]);

  return(
    <div className="card"  onClick={ () => setCount(count + 1)}>
    <h2 >{title} <br/> {count} </h2>
    <button onClick={() => setHasLiked(!hasLiked)}>
     { hasLiked ? "❤️" : "🤍"}
    </button>
    </div>

  ) 
};

const App = () => {
  return (
    <>
      <h2>Functional Arrow component</h2>
      <div className="card-container">
        <Card title="Showshank redemption" />
        <Card title="Forrest Gump" />
        <Card title="Interstellar" />
      </div>
    </>
  );
};

export default App;
