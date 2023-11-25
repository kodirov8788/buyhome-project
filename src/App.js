import { Link } from "react-router-dom";
import Cards from "./components/cards/Cards";
import "./App.css";
import Single from './single/Single';


function App() {
  return (
    <div className="w-full h-full">
      <Cards />

      {/* {fake_data.map(addr => (
        <Link to={`single/${addr.id}/swiper`} state={addr}>  <h1>{addr.address}</h1></Link>
      ))} */}

      <Single />


    </div>
  );
}

export default App;
