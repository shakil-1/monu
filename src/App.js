import { Route, Routes } from "react-router-dom";
import Home from "./Components/Page/Home/Home";
import Navbar from './Components/Share/Navbar'

function App() {
  return (
    <div>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
