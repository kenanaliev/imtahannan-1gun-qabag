import "./reset.scss"
import Add from './layout/Pages/Add'
import Home from './layout/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./layout/Pages/Wishlist";
import Detail from "./layout/Pages/Detail";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Add" element={<Add />}></Route>
        <Route path="/Wishlist" element={<Wishlist />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
