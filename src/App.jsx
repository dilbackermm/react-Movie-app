import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count}{" "}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without Hassle
            </h1>
          </header>
        </div>
      </div>
    </main>
  );
};

export default App;
