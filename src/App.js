import './App.css';
import Nav from "./Nav.js"
import About from "./About.js"
import Shop from "./Shop.js"
import ShopDetail from "./ShopDetail.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function Home(){

  return(
    <div>
      <h1>Home page</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/:id" element={<ShopDetail />}/>
        </Routes>

      </div>    
    </Router>

  );
}

export default App;
