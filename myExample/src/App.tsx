import { Suspense } from "react";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="app-container">
      <div className="title-container shadow">
        <h2>Just another React app that uses Suspense</h2>
      </div>
      <Suspense fallback={<h2>Peraí monstro...</h2>}>
        <div className="content-container shadow">
          <Posts />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
