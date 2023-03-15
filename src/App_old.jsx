import { useState, useEffect } from 'react'
import axios from 'axios'
import Contact from './Contact';

function App() {
  // const [cards, setCards] = useState([]);
  // const [error, setError] = useState(null);
  const [starWars, setStarWars] = useState([]);

  // const requestAPI = async () => {
  //   try {
  //     const res = await axios.get('API_URL', {
  //       headers: {},
  //       params: {}
  //     });
  //   } catch(error) {
  //     console.log(error);
  //   }
  // };

  // const fetchCards = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://api.magicthegathering.io/v1/cards', {
  //       headers: {},
  //       params: {
  //         artist: 'Seb McKinnon'
  //       }
  //     });
  //     setCards(response.data.cards);
  //     console.log(response.data.cards);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  
  const fetchPodracers = async () => {
    try {
      const response = await axios.get(
        'https://swapi.dev/api/vehicles/', {
        headers: {},
        params: {
          search: 'Modified Luxury Sail Barge'
        }
      });
      setStarWars(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
      <button onClick={() => fetchPodracers()}>Get Those Pods</button>
      {
        starWars && <div>
          {starWars.map(({ name, model, manufacturer }) => (
            <Contact
              key={name}
              name={name}
              email={model}
              tagline={manufacturer}
            />
          ))}
        </div>
      }
    </div>
  );
}

export default App;
