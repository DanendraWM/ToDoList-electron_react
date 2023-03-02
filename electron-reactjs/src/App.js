// import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditList from "./components/EditList";
import HomeList from "./components/HomeList";
function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto my-3 min-h-screen">
        <Routes>
          <Route path="/" element={<HomeList />} />
          <Route path="/list/:id" element={<EditList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
