import { useEffect, useState } from 'react';

const DELAY_INTERVAL = 5000;

export const useRequest = (onRequest: Function): void => {
  const [, setTik] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTik(startPercent => startPercent);
      onRequest();
    }, DELAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);
};
