import { useState, useEffect } from 'react';

const useThrottling = (value, timeout) => {
  const [throttledValue, setThrottledValue] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setThrottledValue(value);
    }, timeout);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, timeout]);
  return throttledValue;
};

export default useThrottling;
