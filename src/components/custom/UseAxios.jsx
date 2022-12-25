import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const useAxios = ({ method, url }) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios[method](url)
      .then(res => setResponse(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => fetchData(), []);

  return { response, error, loading };
};
