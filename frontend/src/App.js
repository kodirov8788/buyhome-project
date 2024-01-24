import { Link } from "react-router-dom";
import Cards from "./components/cards/Cards";
import "./App.css";
import Single from "./single/Single";
import Move_card from "./components/Move_card";
import Firstmain from "./components/Firstmain";
import Navbar from "./components/Navbar";
import Card_swiper from "./components/Card_swiper";

function App() {
  return (
    <div className="w-full ">
      {/* <Navbar />
      <Firstmain /> */}
      <Cards />

      <Move_card />
      <Card_swiper/>

    </div>
  );
}

export default App;
