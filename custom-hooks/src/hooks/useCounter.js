import {useState, useEffect} from 'react';

const useCounter = (inc, int = 1000) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCounter((prevCounter) => prevCounter + inc);
        }, int);
    
        return () => clearInterval(interval);
      }, [inc, int]);

      return counter; 
};

export default useCounter;