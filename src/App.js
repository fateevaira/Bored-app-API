import { useEffect, useState } from 'react';
import video from './Octagon.mp4';
import './App.css';

function App() {

  const [showAdvice, setShowAdvice] = useState('');

  useEffect(() => {
    getAdvice()
  }, [])

  const getAdvice = async() => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setShowAdvice(data.activity);
  }
 
  return (
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>

        <h1>What to do if you're bored</h1>
      </div>

      <div className='container'>
        <h2>{showAdvice}</h2>
      </div>
     
     <div className='container'>
       <button className='btn' onClick={getAdvice}>Show next advice</button>
     </div>
    </div>
  );
}

export default App;
