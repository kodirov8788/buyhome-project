import { Link } from 'react-router-dom';
import './App.css';
import Single from './single/Single';
import { fake_data } from './static_data';



function App() {
  return (
    <div className="w-full h-full">
      {fake_data.map(addr => (
        <Link to={`single/${addr.id}/swiper`} state={addr}>  <h1>{addr.address}</h1></Link>
      ))}

      {/* <Single /> */}


    </div>
  );
}

export default App;
