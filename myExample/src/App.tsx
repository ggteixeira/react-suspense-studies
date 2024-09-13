import { Suspense } from "react";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="app-container">
      <div className="title-container shadow">
        <h2>Just another React app that uses Suspense</h2>
      </div>
      <div className="content-container shadow">
        <Suspense fallback={<h4>Peraí monstro...</h4>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
