import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

  function App() {
  
    return (
      <div className="main">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<p>Pereda</p>} />
            <Route path="/blog" element={<p>Pereda</p>} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/about_us" element={<p>Pereda</p>} />
            <Route path="/contact" element={<p>Pereda</p>} />
            <Route path="*" element={<h4>Te perdiste! Error: 404</h4>} />
            <Route path="/productos/:itemID"  element={<ItemDetailContainer />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


export default App;
