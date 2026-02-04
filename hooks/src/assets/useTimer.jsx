import { useEffect, useState } from "react";

const useTimer =() =>{
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return seconds;
}

export default useTimer;

