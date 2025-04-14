import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
function App() {
  const [animals,setAnimals] = useState([])
  useEffect(() => {
    const allAnimals = axios.get(`https://fullstackapp-zb20--5000--fb22cd3d.local-credentialless.webcontainer.io/api/animals`)
    setAnimals(allAnimals)
    .then(function (allAnimals) {
      console.log(allAnimals.data);
      console.log(allAnimals.status);
      console.log(allAnimals.statusText);
      console.log(allAnimals.headers);
      console.log(allAnimals.config);
    }); 
  }, [])
  return (
    <div className="App">
      <nav className="nav">
        <div>
          <h1 className="brand">JD</h1>
        </div>
        <div>
          <ul className="links">
          <li><a href="./">Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact</a></li>
        </ul>
        </div>
      </nav>
      {/* <section className="hero">
      </section>
      <section className="info"></section> */}
      <div>

      </div>
    </div>
  );
}

export default App;
