import React, { useState, useEffect, useCallback  } from 'react'
import Box from './components/Box'

 
const App = () => {
  const [advice, setAdvice] = useState({});
  const [renderDone, setRenderDone] = useState(false);

  const handleClick = useCallback (async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice ( data.slip ); 
      setRenderDone(true);

    } catch (err) {
      console.log(err);
    }
  },[])

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div className='ag-container'>
      { renderDone  && <Box handleClick={handleClick} advice={advice.advice} AdviecId={advice.id} key={advice.id} /> }
       
    </div>
  )
}

export default App