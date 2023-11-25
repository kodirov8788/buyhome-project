import { Link } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
      <Cards/>
=======
import Single from './single/Single';
import { fake_data } from './static_data';



function App() {
  return (
    <div className="w-full h-full">
      {fake_data.map(addr => (
        <Link to={`single/${addr.id}/swiper`} state={addr}>  <h1>{addr.address}</h1></Link>
      ))}

      {/* <Single /> */}


>>>>>>> bd6b04469a0f9548f1f696539043d4798793d4f7
    </div>
  );
}

export default App;