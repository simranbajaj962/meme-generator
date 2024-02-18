import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="relative">
      {/* <h1 className="font-semibold text-center text-4xl">
        Let's Generate Memes 😉
      </h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
