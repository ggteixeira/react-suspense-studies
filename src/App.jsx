import { Suspense } from "react";
import UserWelcome from "./components/UserWelcome";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="app">
      <h2>Suspense Todo </h2>
      <Suspense fallback={<p>Loading user defaults...</p>}>
        <UserWelcome />
      </Suspense>

      <Suspense fallback={<p>Loading Todos...</p>}>
        <Todos />
      </Suspense>
    </div>
  );
}

export default App;
