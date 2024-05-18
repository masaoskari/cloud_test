import {useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [coffees, setCoffees] = useState([]);

  const fetchCoffees = async () => {
    const response = await axios.get("/api/coffees");
    setCoffees(response.data)
  }

  return (
    <>
      <h1>Coffees</h1>
      <button onClick={fetchCoffees}>GET COFFEES</button>
      {coffees.length > 0 ? (
        coffees.map(coffee => (
          <div key={coffee._id}>
            <h2>{coffee.name}</h2>
            <p>{coffee.description}</p>
          </div>
        ))
      ) : (
        <p>No coffees available.</p>
      )}
    </>
  )
}

export default App
