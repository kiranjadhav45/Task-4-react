import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Crud from "./pages/Crud";
import Animetion from "./pages/Animetion";
import Weather from "./pages/Weather";
import Form from "./pages/Form";
import Thumbnail from "./pages/Thumbnail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crud />} />
          <Route path="/animation" element={<Animetion />} />
          <Route path="/Api" element={<Weather />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
