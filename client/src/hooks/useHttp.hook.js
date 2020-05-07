import { useState, useCallback, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useHttp = () => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = {
        Authorization: `Bearer ${auth.token}`,
      }
    ) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const data = await response.json();

        if (data.message === 'Authorization failed') {
          auth.logout();
        }

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong, try again!');
        }
        setLoading(false);
        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    [auth]
  );
  return { loading, request, error };
};

export default useHttp;
