import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ContactList />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

    </>
  );
}

export default App;
