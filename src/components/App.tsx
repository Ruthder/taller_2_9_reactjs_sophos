import Card from './Card'
import "../styles/App.css"
import { useEffect, useState } from 'react';

function App() {

  const [userData, setUserData] = useState({})

  const fetchData = () => {
    return fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0])
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function isEmptyObject(obj: any): boolean {    
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='app'>
      { isEmptyObject(userData)? <></> : <Card userData={userData}/>}
    </div>
  )
}

export default App