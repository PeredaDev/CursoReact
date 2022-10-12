import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

  function App() {
  
    return (
      <div className="main">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/blog" element={<ItemListContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/about_us" element={<ItemListContainer />} />
            <Route path="/contact" element={<ItemListContainer />} />
            <Route path="*" element={<h4>Te perdiste! Error: 404</h4>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


export default App;
