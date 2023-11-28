import { Link } from "react-router-dom";
import Cards from "./components/cards/Cards";
import "./App.css";
import Single from "./single/Single";
import Move_card from "./components/Move_card";
import Firstmain from "./components/Firstmain";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-full">
      {/* <Navbar />
      <Firstmain /> */}
       <Cards />

      {/* {fake_data.map(addr => (
        <Link to={`single/${addr.id}/swiper`} state={addr}>  <h1>{addr.address}</h1></Link>
      ))} */}

      {/* <Single /> */}

      {/* <Move_card /> */}
    </div>
  );
}

export default App;
