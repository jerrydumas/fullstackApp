import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
function App() {
  const [listings,setListings] = useState([])
  useEffect(() => {
    const allListings = axios.get(`https://fullstackapp-zb20--5000--fb22cd3d.local-credentialless.webcontainer.io/api/animals`)
    setListings(allListings)
    .then(function () {
      console.log(allListings.data);
      console.log(allListings.status);
      console.log(allListings.statusText);
      console.log(allListings.headers);
      console.log(allListings.config);
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
{listings.map((item)=>{
<ul key={item._id}>
  <li>{item.avenue}</li>
  <li>{item.price}</li>
  <li>{item.rooms}</li>
</ul>
})}


      </div>
    </div>
  );
}

export default App;
