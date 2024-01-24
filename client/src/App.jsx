import "./reset.scss"
import Add from './layout/Pages/Add'
import Home from './layout/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Add" element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
